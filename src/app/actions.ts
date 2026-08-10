"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase";
import { notifyTelegram, type DeliveryResult, type LeadNotification } from "@/lib/telegram";
import { locales } from "@/lib/i18n/config";

export type LeadErrorCode = "name" | "email" | "message" | "consent" | "generic" | "rateLimit";

export type LeadState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errors: LeadErrorCode[] };

const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional().default(""),
  budget: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().min(10).max(4000),
  consent: z.literal("on"),
  locale: z.enum(locales),
});

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const attempts = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: боты заполняют скрытое поле, люди — нет.
  if (formData.get("website")) return { status: "success" };

  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") ?? undefined,
    budget: formData.get("budget") ?? undefined,
    message: formData.get("message"),
    consent: formData.get("consent"),
    locale: formData.get("locale"),
  });

  if (!parsed.success) {
    const fields = new Set(parsed.error.issues.map((issue) => issue.path[0]));
    const errors = (["name", "email", "message", "consent"] as const).filter((field) =>
      fields.has(field),
    );
    return { status: "error", errors: errors.length ? errors : ["generic"] };
  }

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) return { status: "error", errors: ["rateLimit"] };

  // Каналы независимы: бесплатный Supabase умеет засыпать, и заявка не должна
  // теряться из-за этого — уведомление уходит даже при упавшей записи в базу.
  const [saved, notified] = await Promise.all([
    saveLead(parsed.data, {
      referer: requestHeaders.get("referer"),
      userAgent: requestHeaders.get("user-agent"),
    }),
    notifyTelegram(parsed.data),
  ]);

  const results = [saved, notified];
  if (results.some((result) => result === "failed") && !results.includes("ok")) {
    return { status: "error", errors: ["generic"] };
  }

  return { status: "success" };
}

async function saveLead(
  lead: LeadNotification,
  meta: { referer: string | null; userAgent: string | null },
): Promise<DeliveryResult> {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.warn("[leads] Supabase не настроен, заявка не сохранена:", lead.email);
    return "skipped";
  }

  const { error } = await supabase.from("leads").insert({
    name: lead.name,
    email: lead.email,
    company: lead.company || null,
    budget: lead.budget || null,
    message: lead.message,
    locale: lead.locale,
    referer: meta.referer,
    user_agent: meta.userAgent,
  });

  if (error) {
    console.error("[leads] insert failed", error);
    return "failed";
  }

  return "ok";
}
