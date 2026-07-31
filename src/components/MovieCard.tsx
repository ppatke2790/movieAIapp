import type { RecommendedMovie } from '../types'
import { getServiceColor, getServiceLabel } from '../lib/recommend'

interface MovieCardProps {
  movie: RecommendedMovie
  saved?: boolean
  onSelect: () => void
  onToggleSave: () => void
  compact?: boolean
}

export default function MovieCard({
  movie,
  saved,
  onSelect,
  onToggleSave,
  compact,
}: MovieCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/8 bg-surface transition-colors hover:border-white/15">
      <div className={`flex ${compact ? 'flex-row' : 'flex-col sm:flex-row'}`}>
        <button
          type="button"
          onClick={onSelect}
          className={`relative shrink-0 overflow-hidden bg-surface-elevated text-left ${
            compact ? 'h-28 w-20' : 'aspect-[2/3] w-full sm:h-auto sm:w-32'
          }`}
        >
          <img
            src={movie.posterPath}
            alt={`${movie.title} (${movie.year}) poster`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </button>

        <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
          <div className="flex items-start justify-between gap-3">
            <button type="button" onClick={onSelect} className="min-w-0 text-left">
              <h3 className="text-lg font-semibold leading-tight">{movie.title}</h3>
              <p className="mt-1 text-sm text-text-muted">
                {movie.year} · {movie.runtime} min · ★ {movie.rating.toFixed(1)}
              </p>
            </button>
            <button
              type="button"
              onClick={onToggleSave}
              aria-label={saved ? 'Remove from watchlist' : 'Save to watchlist'}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 text-text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={saved ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="2"
                className={saved ? 'text-accent' : ''}
                aria-hidden="true"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button>
          </div>

          <p className="text-sm leading-relaxed text-text-primary/90">{movie.rationale}</p>

          <div className="flex flex-wrap items-center gap-2">
            {movie.streaming.slice(0, 3).map((option) => (
              <span
                key={option.service}
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
                style={{
                  backgroundColor: `${getServiceColor(option.service)}22`,
                  color: getServiceLabel(option.service) ? undefined : undefined,
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: getServiceColor(option.service) }}
                  aria-hidden="true"
                />
                {option.label}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={onSelect}
            className="mt-auto min-h-11 w-fit rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
          >
            View details
          </button>
        </div>
      </div>
    </article>
  )
}
