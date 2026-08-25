import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useWatchlist } from '../hooks/useStorage'
import { getMovieById } from '../data/movies'
import MovieCard from '../components/MovieCard'
import MovieDetail from '../components/MovieDetail'
import type { RecommendedMovie } from '../types'

export default function WatchlistPage() {
  const { watchlist, toggle } = useWatchlist()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const movies: RecommendedMovie[] = watchlist
    .map((id) => getMovieById(id))
    .filter((movie): movie is NonNullable<typeof movie> => Boolean(movie))
    .map((movie) => ({ ...movie, rationale: movie.rationaleTemplates[0] }))

  const selected = movies.find((movie) => movie.id === selectedId)

  if (movies.length === 0) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center">
        <h1 className="text-xl font-semibold">Your watchlist is empty</h1>
        <p className="mt-2 text-sm text-text-muted">
          Save picks from chat to find them here later.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-accent px-6 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
        >
          Find something to watch
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto flex max-w-6xl md:gap-6 md:px-6 md:py-6">
      <div className={`flex-1 space-y-3 px-4 py-4 md:px-0 ${selectedId ? 'hidden md:block' : ''}`}>
        <h1 className="text-lg font-semibold">Your watchlist</h1>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            saved
            onSelect={() => setSelectedId(movie.id)}
            onToggleSave={() => toggle(movie.id)}
          />
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-30 md:relative md:inset-auto md:w-[380px] md:shrink-0">
          <MovieDetail
            movie={selected}
            saved
            onClose={() => setSelectedId(null)}
            onToggleSave={() => toggle(selected.id)}
          />
        </div>
      )}
    </div>
  )
}
