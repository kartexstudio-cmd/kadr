import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

/**
 * Дёргает Supabase раз в день через Vercel Cron (см. vercel.json), чтобы
 * проект на бесплатном тарифе не засыпал после ~недели без обращений.
 */
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const client = getSupabaseAdmin();
  if (!client) {
    return NextResponse.json({ ok: false, reason: "supabase not configured" });
  }

  const { error } = await client
    .from("leads")
    .select("id", { head: true, count: "exact" });

  return NextResponse.json({ ok: !error, error: error?.message });
}
