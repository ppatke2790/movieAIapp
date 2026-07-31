import type { RecommendedMovie } from '../types'
import AvailabilityRow from './AvailabilityRow'

interface MovieDetailProps {
  movie: RecommendedMovie
  saved: boolean
  onClose: () => void
  onToggleSave: () => void
}

export default function MovieDetail({ movie, saved, onClose, onToggleSave }: MovieDetailProps) {
  return (
    <aside
      className="flex h-full flex-col overflow-hidden border-white/8 bg-background md:border-l"
      aria-label={`Details for ${movie.title}`}
    >
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 md:px-6">
        <button
          type="button"
          onClick={onClose}
          className="flex min-h-11 items-center gap-2 text-sm text-text-muted hover:text-text-primary md:hidden"
        >
          ← Back
        </button>
        <p className="hidden text-sm font-medium text-text-muted md:block">Movie details</p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="hidden min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 text-text-muted hover:text-text-primary md:flex"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 md:px-6">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={movie.posterPath.replace('/w342', '/w500')}
            alt={`${movie.title} poster`}
            className="aspect-[2/3] w-full object-cover"
          />
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{movie.title}</h2>
            <p className="mt-1 text-sm text-text-muted">
              {movie.year} · {movie.runtime} min · ★ {movie.rating.toFixed(1)} ·{' '}
              {movie.genres.join(', ')}
            </p>
          </div>

          <div className="rounded-2xl border border-accent/20 bg-accent/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Why this pick
            </p>
            <p className="mt-2 text-sm leading-relaxed">{movie.rationale}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Synopsis</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{movie.synopsis}</p>
          </div>

          {movie.trailerUrl && (
            <div>
              <h3 className="text-sm font-semibold">Trailer</h3>
              <a
                href={movie.trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm transition-colors hover:border-accent/30"
              >
                Watch trailer on YouTube →
              </a>
            </div>
          )}

          <div>
            <h3 className="text-sm font-semibold">Where to watch</h3>
            <div className="mt-3">
              <AvailabilityRow options={movie.streaming} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 p-4 md:p-6">
        <button
          type="button"
          onClick={onToggleSave}
          className="flex min-h-11 w-full items-center justify-center rounded-xl border border-white/10 text-sm font-medium transition-colors hover:border-accent/40"
        >
          {saved ? 'Saved to watchlist ✓' : 'Save for later'}
        </button>
      </div>
    </aside>
  )
}
