# Tools & Integrations

Third-party services in use or likely needed for MovieAIapp. **None are integrated yet** — this is a planning list.

## Development & collaboration

| Tool | Status | Purpose |
|------|--------|---------|
| **Cursor** | In use | IDE, AI-assisted design and future implementation |
| **Git / GitHub** | Local only | Version control; remote repo not connected |
| **Figma** | TODO | UI design and prototyping — link when file exists |
| **[jakubkrehel/skills](https://github.com/jakubkrehel/skills)** | Installed | Agent skills in `.cursor/skills/` — see [Interface agent skills](#interface-agent-skills) |

## Movie & media data (needed)

| Tool | Status | Purpose |
|------|--------|---------|
| **TMDB** | Not integrated | Posters, cast, genres, search — industry default |
| **Streaming availability API** | Not selected | Where to watch by region (e.g. JustWatch-style providers) |
| **YouTube / TMDB trailers** | Not integrated | Trailer embeds on detail views |

## AI (needed)

| Tool | Status | Purpose |
|------|--------|---------|
| **LLM provider** | Not selected | Conversational recommendations, taste explanation |
| **Moderation API** | TBD | Safe outputs, block harmful content in chat |

## Analytics & ops (later)

| Tool | Status | Purpose |
|------|--------|---------|
| **Product analytics** | Not selected | Funnel: prompt → pick → click-out |
| **Error monitoring** | Not selected | Post-launch reliability |

## Interface agent skills

[jakubkrehel/skills](https://github.com/jakubkrehel/skills) — MIT-licensed collection for building polished interfaces in Cursor and other agents. Relevant to MovieAIapp's chat UI, movie cards, dark theme, and accessibility requirements.

| Skill | Use for MovieAIapp |
|-------|-------------------|
| **better-interface** | Holistic review across all skills below |
| **better-ui** | Border radius, shadows, animations on cards and chat |
| **better-typography** | Font choice, spacing, wrapping for metadata and rationale text |
| **better-colors** | OKLCH palette generation — supports [brand-guidelines.md](../design/brand-guidelines.md) dark theme |
| **better-accessibility** | Focus states, keyboard nav, ARIA for chat and movie cards |
| **better-layout** | Chat + detail layout, breakpoints, progressive disclosure |
| **better-writing** | Prompt chips, empty states, error copy, AI rationale tone |

**Install:** Done — all 7 skills copied to `.cursor/skills/` (manual install; `npx skills` requires Node ≥ 22.20, current machine has v20.12.2). Confirmed 2026-08-14 (Pallavi ran the install directly in terminal).

**Invoke in Cursor:** Ask for a `better-interface` review, or reference a specific skill (e.g. "use better-colors for the palette").

Also published at [interfaces.dev](https://jakub.kr/skills) / [skills.sh](https://skills.sh).

## Integrations out of scope for v1 (unless PRD changes)

- Direct playback inside app (deep link to Netflix/Max/etc. is enough)
- Social login beyond one simple auth provider
- Payment / rental transactions

## Related docs

- [Tech stack](./tech-stack.md)
- [PRD](../prd/prd.md)
- [Open questions](../prd/open-questions.md)
