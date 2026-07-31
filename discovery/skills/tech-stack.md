# Tech Stack

**Current state:** No stack chosen — repository contains zero source files and no `package.json`, `requirements.txt`, or similar.

## Decisions pending

All choices below are open. Final selections should be recorded here when made, with rationale.

| Layer | Options under consideration | Notes |
|-------|----------------------------|-------|
| **Client** | Web (React/Next.js), React Native, or native iOS | Designer-led project may favor web for fastest iteration |
| **Backend** | Node, Python (FastAPI), or serverless (Vercel/Cloudflare) | Depends on AI SDK preference |
| **Database** | Postgres + Redis, or Firebase/Supabase for speed | User profiles, watchlists, chat history |
| **AI** | OpenAI, Anthropic, or multi-provider via abstraction | Cost, latency, and quality tradeoffs |
| **Movie data** | TMDB API (common default), OMDb | Posters, metadata, search |
| **Availability** | JustWatch API or manual region rules | Licensing and cost TBD |
| **Hosting** | Vercel, Railway, AWS | After GitHub push |

## Why nothing is locked yet

Discovery and design run before implementation. Stack should follow product constraints (mobile-first vs web, real-time chat, offline needs) defined in [prd.md](../prd/prd.md) and [design-requirements.md](../design/design-requirements.md).

## Related docs

- [Tools & integrations](./tools-and-integrations.md)
- [Open questions](../prd/open-questions.md)
- [Roadmap](../strategy/roadmap.md)
