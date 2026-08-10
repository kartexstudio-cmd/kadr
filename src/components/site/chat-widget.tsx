"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type ChatMessage = { role: "user" | "model"; text: string };

type ChatErrorKind = "rate_limit" | "generic";

export function ChatWidget({ lang, t }: { lang: Locale; t: Dictionary["chat"] }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<ChatErrorKind | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, pending]);

  const send = async () => {
    const text = input.trim();
    if (!text || pending) return;

    const history = messages.slice(-8);
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setPending(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, locale: lang, history }),
      });

      if (response.status === 429) {
        setError("rate_limit");
        return;
      }
      if (!response.ok) {
        setError("generic");
        return;
      }

      const data = await response.json();
      if (typeof data?.reply !== "string") {
        setError("generic");
        return;
      }

      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch {
      setError("generic");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
          <div className="flex h-[28rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-card border border-line bg-surface shadow-2xl">
            <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
              <div className="min-w-0">
                <p className="font-display text-sm font-bold">{t.title}</p>
                <p className="truncate text-xs text-muted">{t.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.close}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div ref={listRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              <ChatBubble role="model" text={t.greeting} />
              {messages.map((message, index) => (
                <ChatBubble key={index} role={message.role} text={message.text} />
              ))}
              {pending && <ChatBubble role="model" text={t.thinking} muted />}
              {error && (
                <ChatBubble
                  role="model"
                  text={error === "rate_limit" ? t.rateLimitFallback : t.errorFallback}
                />
              )}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                void send();
              }}
              className="flex items-center gap-2 border-t border-line p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={t.placeholder}
                maxLength={800}
                disabled={pending}
                className="min-w-0 flex-1 rounded-full border border-line bg-ink px-4 py-2 text-sm outline-none transition focus:border-accent disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={pending || !input.trim()}
                aria-label={t.send}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-accent-ink transition hover:brightness-110 disabled:opacity-40"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M3 20l18-8L3 4v6l12 2-12 2z" />
                </svg>
              </button>
            </form>
          </div>
        )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={t.bubbleLabel}
        aria-expanded={open}
        className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-ink shadow-[0_0_40px_-8px] shadow-accent/70 transition hover:brightness-110"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-4.4 3.3A1 1 0 0 1 3 19.5V5a1 1 0 0 1 1-1Z" />
          </svg>
        )}
      </button>
    </div>
  );
}

function ChatBubble({
  role,
  text,
  muted,
}: {
  role: "user" | "model";
  text: string;
  muted?: boolean;
}) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <p
        className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
          isUser
            ? "bg-accent text-accent-ink"
            : `border border-line bg-ink-soft ${muted ? "text-muted" : "text-fg"}`
        }`}
      >
        {text}
      </p>
    </div>
  );
}
