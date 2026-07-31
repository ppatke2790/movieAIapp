# Domain Context

Background for anyone joining MovieAIapp before touching design or code.

## The problem space

**Choice overload.** The average household subscribes to multiple streaming services. Catalogs are large, search is keyword-driven, and "recommended for you" rows reflect platform incentives as much as personal taste.

**Fragmentation.** Availability, ratings, and watchlists live across Netflix, Max, Apple TV, Letterboxd, IMDb, and social threads. No single surface answers: *What should I watch tonight, where can I stream it, and will I actually like it?*

**AI shift.** Large language models can interpret fuzzy intent ("something like Arrival but shorter," "comfort watch after a bad day") better than genre filters. Users increasingly ask ChatGPT for movie picks — but general-purpose chat lacks persistent taste profiles, streaming availability, or a purpose-built browsing experience.

## Industry terms

| Term | Meaning |
|------|---------|
| **VOD** | Video on demand — streaming or rental |
| **Metadata** | Title, year, cast, genre, runtime, poster, synopsis |
| **Availability data** | Which service(s) carry a title in a given region |
| **Taste profile** | Aggregated signals (ratings, likes, skips) used for personalization |
| **Cold start** | Recommending before enough user data exists |

## Data sources (typical for this category)

Products in this space usually depend on third-party movie databases and availability APIs (e.g. TMDB, OMDb, JustWatch-style availability feeds). MovieAIapp has not selected providers yet — see [tools-and-integrations.md](../skills/tools-and-integrations.md).

## Regulatory & UX considerations

- **Affiliate / linking:** Deep links to streaming services may involve partner programs.
- **Regional licensing:** Availability varies by country; geo must be handled explicitly.
- **Spoilers:** AI-generated summaries and "why you'll like this" copy must avoid plot spoilers by default.
- **Children's content:** If family mode is in scope, age ratings and content filters become mandatory.

## Related docs

- [Competitive landscape](./competitive-landscape.md)
- [Users & personas](./users-and-personas.md)
- [PRD](../prd/prd.md)
