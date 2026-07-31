# Roadmap

Phased plan from current discovery through a shippable MVP. Dates are placeholders until Pallavi sets targets.

## Phase 0 — Discovery & design *(current)*

**Milestone:** Discovery folder complete; PRD v1; Figma prototype of core loop.

- [x] Establish `discovery/` as source of truth
- [ ] Resolve [open questions](../prd/open-questions.md) (persona, platform, AI provider)
- [ ] UX flows + wireframes ([ux-flows.md](../design/ux-flows.md))
- [ ] Brand exploration ([brand-guidelines.md](../design/brand-guidelines.md))
- [ ] 5 user interviews or tests → [research-notes.md](../prd/research-notes.md)

## Phase 1 — Foundation

**Milestone:** Repo on GitHub; app shell; movie metadata wired; basic chat UI.

- Initialize codebase and CI
- Connect TMDB (or chosen metadata API)
- Auth + minimal user profile (even if email-only)
- Chat interface with structured movie card responses

## Phase 2 — Core loop

**Milestone:** End-to-end "ask → pick → where to watch" works in one region.

- Taste onboarding (lightweight: favorites + genres, or chat-based)
- Availability filtering for at least one country
- Watchlist / save for later
- Empty, loading, error states per [design-requirements.md](../design/design-requirements.md)

## Phase 3 — Polish & beta

**Milestone:** Private beta with 20–50 users; metrics from [goals-and-metrics.md](./goals-and-metrics.md).

- Performance and mobile polish
- Analytics events
- Feedback loop and iteration

## Phase 4 — Launch

TODO: Define public launch criteria (app store vs web-only, marketing channel, cohort-10th alignment if applicable).

## Related docs

- [Goals & metrics](./goals-and-metrics.md)
- [Skills needed](../skills/skills-needed.md)
- [Tech stack](../skills/tech-stack.md)
