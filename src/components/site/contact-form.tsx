"use client";

import { useActionState, useId } from "react";
import { submitLead, type LeadErrorCode, type LeadState } from "@/app/actions";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const initialState: LeadState = { status: "idle" };

const fieldClass =
  "w-full rounded-xl border border-line bg-ink-soft px-4 py-3 text-sm text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none aria-[invalid=true]:border-red-400";

export function ContactForm({ lang, t }: { lang: Locale; t: Dictionary["contact"]["form"] }) {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);
  const uid = useId();

  const errors: LeadErrorCode[] = state.status === "error" ? state.errors : [];
  const has = (code: LeadErrorCode) => errors.includes(code);
  const field = (name: string) => `${uid}-${name}`;

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="card flex min-h-[26rem] flex-col items-center justify-center gap-4 p-10 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-ink">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="font-display text-2xl font-bold">{t.successTitle}</h3>
        <p className="max-w-sm text-muted">{t.successText}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="card space-y-5 p-6 md:p-8">
      <input type="hidden" name="locale" value={lang} />

      <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={field("website")}>Website</label>
        <input id={field("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={field("name")} className="mb-2 block text-sm font-medium">
            {t.name}
          </label>
          <input
            id={field("name")}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t.namePlaceholder}
            aria-invalid={has("name")}
            aria-describedby={has("name") ? field("name-error") : undefined}
            className={fieldClass}
          />
          {has("name") && (
            <p id={field("name-error")} className="mt-2 text-xs text-red-400">
              {t.errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={field("email")} className="mb-2 block text-sm font-medium">
            {t.email}
          </label>
          <input
            id={field("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder={t.emailPlaceholder}
            aria-invalid={has("email")}
            aria-describedby={has("email") ? field("email-error") : undefined}
            className={fieldClass}
          />
          {has("email") && (
            <p id={field("email-error")} className="mt-2 text-xs text-red-400">
              {t.errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={field("company")} className="mb-2 block text-sm font-medium">
            {t.company}
          </label>
          <input
            id={field("company")}
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={t.companyPlaceholder}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={field("budget")} className="mb-2 block text-sm font-medium">
            {t.budget}
          </label>
          <select id={field("budget")} name="budget" defaultValue="" className={fieldClass}>
            <option value="">—</option>
            {t.budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={field("message")} className="mb-2 block text-sm font-medium">
          {t.message}
        </label>
        <textarea
          id={field("message")}
          name="message"
          rows={4}
          required
          placeholder={t.messagePlaceholder}
          aria-invalid={has("message")}
          aria-describedby={has("message") ? field("message-error") : undefined}
          className={`${fieldClass} resize-y`}
        />
        {has("message") && (
          <p id={field("message-error")} className="mt-2 text-xs text-red-400">
            {t.errors.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={field("consent")} className="flex items-start gap-3 text-sm text-muted">
          <input
            id={field("consent")}
            name="consent"
            type="checkbox"
            required
            aria-invalid={has("consent")}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
          />
          <span>{t.consent}</span>
        </label>
        {has("consent") && <p className="mt-2 text-xs text-red-400">{t.errors.consent}</p>}
      </div>

      <div aria-live="polite" className="min-h-[1rem]">
        {(has("generic") || has("rateLimit")) && (
          <p className="text-sm text-red-400">
            {has("rateLimit") ? t.errors.rateLimit : t.errors.generic}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-ink transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? t.submitting : t.submit}
      </button>
    </form>
  );
}
