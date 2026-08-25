# Product Requirements Document (PRD)

MovieAIapp — v0.1 (discovery draft). No implementation exists; this defines intended v1 scope.

## Problem statement

People with multiple streaming subscriptions spend too much time choosing what to watch. Existing apps optimize for browsing or social graph, not for fast, trustworthy decisions. General-purpose AI chat can suggest titles but lacks a dedicated UX, persistent taste memory, and reliable streaming availability.

## Proposed solution

A focused app where users describe what they want in natural language, receive a small set of curated movie recommendations with clear rationale, and jump directly to where they can stream each title.

## Success criteria

See [goals-and-metrics.md](../strategy/goals-and-metrics.md). Phase 1 MVP succeeds when a test user can go from prompt → saved or streaming pick in under three minutes with ≥3 relevant suggestions.

## User stories (v1)

1. As a **Decider**, I want to describe my mood in plain language so I get picks that fit tonight without scrolling multiple apps.
2. As a **Decider**, I want to see where each movie streams so I don't discover something I can't watch.
3. As a **user**, I want a short explanation of why a movie was suggested so I trust the pick.
4. As a **returning user**, I want my watchlist saved so I can decide later.
5. As a **new user**, I want quick onboarding so recommendations aren't random on first use.

## Functional requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-1 | Chat input with suggested prompt chips | P0 |
| FR-2 | AI returns 3–5 movie cards with metadata from external API | P0 |
| FR-3 | Movie detail: poster, synopsis, runtime, rating, rationale | P0 |
| FR-4 | "Where to watch" for at least one region | P0 |
| FR-5 | Save to watchlist | P1 |
| FR-6 | Lightweight taste onboarding | P1 |
| FR-7 | User account (email or OAuth) | P1 |

## Non-functional requirements

- Response latency: first results within 5 seconds under normal conditions
- Mobile-responsive UI per [design-requirements.md](../design/design-requirements.md)
- Spoiler-safe AI copy by default
- Accessible core flows (keyboard + screen reader basics)

## Scope IN (v1)

- Web app, web-first and responsive (decided 2026-08-14 — see [open-questions.md](./open-questions.md))
- English UI first
- One region for availability (country TBD)

## Scope OUT (v1)

- In-app playback
- Social features (follow, reviews, public lists)
- TV series / episodic focus (movies only for v1 unless scope expands)
- Multi-language
- Native apps for all platforms simultaneously

## Constraints

- No codebase yet — design and PRD lead implementation
- Budget for API and LLM usage not defined
- Solo designer driving discovery; engineering capacity TBD

## Related docs

- [Goals & metrics](../strategy/goals-and-metrics.md)
- [Design requirements](../design/design-requirements.md)
- [UX flows](../design/ux-flows.md)
- [Open questions](./open-questions.md)
- [Roadmap](../strategy/roadmap.md)
