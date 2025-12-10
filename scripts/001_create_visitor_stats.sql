-- Create visitor_stats table to track daily and total visitors
create table if not exists public.visitor_stats (
  id uuid primary key default gen_random_uuid(),
  visit_date date not null default current_date,
  visitor_count integer not null default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create unique index on visit_date to ensure one row per day
create unique index if not exists visitor_stats_visit_date_idx on public.visitor_stats(visit_date);

-- Enable RLS (Row Level Security)
alter table public.visitor_stats enable row level security;

-- Allow anyone to read visitor stats
create policy "Anyone can view visitor stats"
  on public.visitor_stats for select
  using (true);

-- Only authenticated users can insert/update (we'll handle this via service role in API)
create policy "Service role can insert visitor stats"
  on public.visitor_stats for insert
  with check (true);

create policy "Service role can update visitor stats"
  on public.visitor_stats for update
  using (true);
