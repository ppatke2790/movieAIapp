# Tech Stack

**Current state:** A frontend scaffold exists and runs (`npm run dev` / `npm run build` both pass). It implements all 5 screens from [design-requirements.md](../design/design-requirements.md) against mock data — no backend, database, or real AI/movie-data integration yet.

**Correction (2026-08-14):** An earlier version of this doc recorded "React + Next.js" as decided. That was wrong — the actual codebase (present since the initial commit, predating that doc entry) uses **Vite**, not Next.js. This doc now reflects what's actually implemented.

## Implemented

| Layer | Choice | Notes |
|-------|--------|-------|
| **Client** | **React 18 + Vite + TypeScript** | `react-router-dom` for routing (`/`, `/onboarding`, `/watchlist`, `/settings`); Tailwind CSS for styling, matching [brand-guidelines.md](../design/brand-guidelines.md) dark theme |
| **State/persistence** | `localStorage` only | `lib/storage.ts` — user profile (genres, favorite movies, streaming services, region) and watchlist; no server, no accounts |
| **"AI" recommendations** | Local keyword-scoring mock | `lib/recommend.ts` — scores the 15-movie mock catalog (`data/movies.ts`) against prompt keywords + profile; simulates latency, offline error, and picks a canned rationale per movie. **Not a real LLM integration** — stands in for FR-2/FR-3 until an LLM provider is chosen |
| **Movie data** | Hardcoded mock catalog | `data/movies.ts` — 15 titles with TMDB-style poster URLs, moods, streaming links; not a live API call |

## Decisions still pending

| Layer | Options under consideration | Notes |
|-------|----------------------------|-------|
| **Backend** | Node, Python (FastAPI), or serverless (Vercel/Cloudflare) | Needed once real LLM calls replace the mock in `lib/recommend.ts` |
| **Database** | Postgres + Redis, or Firebase/Supabase for speed | To replace localStorage once accounts/cross-device sync matter |
| **AI** | OpenAI, Anthropic, or multi-provider via abstraction | Cost, latency, and quality tradeoffs |
| **Movie data** | TMDB API (common default), OMDb | Posters, metadata, search — replaces `data/movies.ts` |
| **Availability** | JustWatch API or manual region rules | Licensing and cost TBD |
| **Hosting** | **Vercel** — decided | 2026-08-14: confirmed. Works fine as a static/Vite deploy target; doesn't require Next.js |

## Why the rest isn't locked yet

Backend, database, AI provider, and data source all depend on each other and on budget — see [open-questions.md](../prd/open-questions.md). The frontend scaffold was built against mocks specifically so UI/UX could be validated without waiting on those decisions.

## Related docs

- [Tools & integrations](./tools-and-integrations.md)
- [Open questions](../prd/open-questions.md)
- [Roadmap](../strategy/roadmap.md)
