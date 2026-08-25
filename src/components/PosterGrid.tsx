import type { Movie } from '../types'

interface PosterGridProps {
  movies: Movie[]
  watchlist: string[]
  onSelect: (id: string) => void
  onToggleSave: (id: string) => void
}

export default function PosterGrid({ movies, watchlist, onSelect, onToggleSave }: PosterGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies.map((movie) => {
        const saved = watchlist.includes(movie.id)
        return (
          <article
            key={movie.id}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-surface transition-colors hover:border-white/15"
          >
            <button type="button" onClick={() => onSelect(movie.id)} className="block w-full text-left">
              <div className="aspect-[2/3] w-full overflow-hidden bg-surface-elevated">
                <img
                  src={movie.posterPath}
                  alt={`${movie.title} (${movie.year}) poster`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-3 pt-8">
                <p className="truncate text-sm font-semibold text-text-primary">{movie.title}</p>
                <p className="text-xs text-text-muted">
                  {movie.year} · ★ {movie.rating.toFixed(1)}
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onToggleSave(movie.id)}
              aria-label={saved ? 'Remove from watchlist' : 'Save to watchlist'}
              className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-background/80 text-text-muted backdrop-blur-sm transition-colors hover:text-accent"
            >
              <svg
                width="16"
                height="16"
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
          </article>
        )
      })}
    </div>
  )
}
