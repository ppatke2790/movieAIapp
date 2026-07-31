# Design Requirements

Screens, components, constraints, and UI states for MovieAIapp. Informed by hypothesized core loop until flows are validated in Figma.

## Core screens (v1)

| Screen | Purpose |
|--------|---------|
| **Home / Chat** | Primary entry; natural-language ask; shows recommendation results |
| **Movie detail** | Poster, metadata, AI rationale, trailer, where to watch, save |
| **Watchlist** | Saved titles; empty state drives back to chat |
| **Onboarding** | Quick taste capture (films liked, genres, services subscribed) |
| **Settings** | Region, connected services, account |

## Key components

- **Chat thread** — user messages + assistant replies with embedded movie cards
- **Movie card** — poster, title, year, runtime, rating, primary CTA (details / save)
- **Availability row** — service icons + deep links
- **Prompt chips** — suggested starters ("Comfort comedy," "90 min thriller," etc.)
- **Loading skeleton** — for cards while AI + metadata fetch

## Responsive rules

- **Mobile-first** — primary use case is couch / phone before watching TV
- **Breakpoints:** single column on mobile; optional two-column (chat + detail) on tablet/desktop
- **Touch targets:** minimum 44×44 pt for CTAs and save actions

## Accessibility

- WCAG 2.1 AA contrast for text on poster overlays and chat bubbles
- Focus order: input → suggestions → results → card actions
- Alt text on posters; don't rely on poster alone for title/year
- Reduced motion option for skeleton/shimmer animations

## UI states (required for every async surface)

| State | Behavior |
|-------|----------|
| **Empty** | Onboarding hints on chat; watchlist CTA when no saves |
| **Loading** | Skeleton cards; send button disabled while request in flight |
| **Error** | Retry for network/AI failure; friendly copy, no raw API errors |
| **Partial** | Some cards loaded, others failed — show what worked + retry for rest |
| **Success** | Full cards with rationale and availability |

## Constraints

- **Spoiler-safe:** AI rationale must not reveal third-act twists by default
- **Performance:** First paint < 1s; recommendations perceived as fast (stream or progressive reveal)
- **Offline:** Graceful message if no network; no fake recommendations

## Related docs

- [UX flows](./ux-flows.md)
- [Brand guidelines](./brand-guidelines.md)
- [PRD](../prd/prd.md)
- [Goals & metrics](../strategy/goals-and-metrics.md)
