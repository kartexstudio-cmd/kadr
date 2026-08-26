-- Выполнить в Supabase → SQL Editor.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  budget text,
  message text not null,
  locale text not null default 'ru',
  referer text,
  user_agent text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- RLS включён и политик нет: анонимный ключ не может ни читать, ни писать.
-- Вставка идёт только через service_role из Server Action, он RLS обходит.
alter table public.leads enable row level security;

-- Добавлено 2026-08-16 для Google Ads: откуда пришёл лид (парсится из referer,
-- см. actions.ts). Таблица уже существует в проде — выполнить отдельно в SQL Editor.
alter table public.leads add column if not exists utm_source text;
alter table public.leads add column if not exists utm_medium text;
alter table public.leads add column if not exists utm_campaign text;
alter table public.leads add column if not exists utm_term text;
