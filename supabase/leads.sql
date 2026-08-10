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
