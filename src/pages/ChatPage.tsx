import { useEffect, useState } from 'react'
import { useChat } from '../hooks/useChat'
import { useWatchlist } from '../hooks/useStorage'
import { MOVIES, getMovieById } from '../data/movies'
import ChatMessage from '../components/ChatMessage'
import ChatInput from '../components/ChatInput'
import PromptChips from '../components/PromptChips'
import MovieDetail from '../components/MovieDetail'
import PosterGrid from '../components/PosterGrid'
import MoodChips from '../components/MoodChips'
import Toast from '../components/Toast'
import { MOOD_CHIPS } from '../types'
import type { RecommendedMovie } from '../types'

function withDefaultRationale(id: string): RecommendedMovie | undefined {
  const movie = getMovieById(id)
  if (!movie) return undefined
  return { ...movie, rationale: movie.rationaleTemplates[0] }
}

export default function ChatPage() {
  const { messages, input, setInput, loading, sendMessage, retry, findMovieInMessages } = useChat()
  const { watchlist, toggle } = useWatchlist()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [toast, setToast] = useState('')
  const [activeMood, setActiveMood] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2200)
    return () => clearTimeout(timer)
  }, [toast])

  useEffect(() => {
    if (!selectedId) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedId])

  const handleToggleSave = (id: string) => {
    const next = toggle(id)
    setToast(next.includes(id) ? 'Saved to watchlist' : 'Removed from watchlist')
  }

  const selectedMovie = selectedId
    ? findMovieInMessages(selectedId) ?? withDefaultRationale(selectedId)
    : undefined
  const hasStarted = messages.some((m) => m.role === 'user')

  const latestWithMovies = [...messages].reverse().find((m) => m.movies && m.movies.length > 0)
  const recommended = latestWithMovies?.movies ?? []

  const activeChip = MOOD_CHIPS.find((chip) => chip.value === activeMood)
  const query = searchQuery.trim().toLowerCase()
  const browseMovies = MOVIES.filter((movie) => {
    const matchesChip =
      !activeChip ||
      (activeChip.kind === 'genre'
        ? movie.genres.includes(activeChip.value)
        : movie.moods.includes(activeChip.value))
    const matchesSearch = !query || movie.title.toLowerCase().includes(query)
    return matchesChip && matchesSearch
  })
  const browseHeading =
    [query ? `Results for "${searchQuery.trim()}"` : 'Browse all', activeChip?.label]
      .filter(Boolean)
      .join(' · ')

  return (
    <div className="mx-auto flex h-full max-w-7xl flex-col md:flex-row md:gap-6 md:px-6 md:py-6">
      <div className="min-h-0 flex-1 space-y-8 overflow-y-auto px-4 py-4 md:px-0">
        <div className="relative">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <label htmlFor="movie-search" className="sr-only">
            Search movies by title
          </label>
          <input
            id="movie-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies by title…"
            className="min-h-11 w-full rounded-xl border border-white/10 bg-surface pl-11 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {recommended.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold text-text-muted">Recommended for you</h2>
            <div className="mt-3">
              <PosterGrid
                movies={recommended}
                watchlist={watchlist}
                onSelect={setSelectedId}
                onToggleSave={handleToggleSave}
              />
            </div>
          </section>
        )}

        <section>
          <MoodChips chips={MOOD_CHIPS} activeValue={activeMood} onSelect={setActiveMood} />

          <h2 className="mt-5 text-sm font-semibold text-text-muted">{browseHeading}</h2>
          <div className="mt-3">
            {browseMovies.length > 0 ? (
              <PosterGrid
                movies={browseMovies}
                watchlist={watchlist}
                onSelect={setSelectedId}
                onToggleSave={handleToggleSave}
              />
            ) : (
              <p className="text-sm text-text-muted">No movies match this filter yet.</p>
            )}
          </div>
        </section>
      </div>

      <aside className="flex h-[45vh] shrink-0 flex-col overflow-hidden border-t border-white/5 md:h-auto md:w-[380px] md:border-l md:border-t-0 md:pl-6">
        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4 md:px-0">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              watchlist={watchlist}
              onSelectMovie={setSelectedId}
              onToggleSave={handleToggleSave}
              onRetry={retry}
            />
          ))}
        </div>

        <div className="shrink-0 space-y-3 border-t border-white/5 bg-background px-4 py-4 md:border-0 md:bg-transparent md:px-0">
          {!hasStarted && <PromptChips onSelect={sendMessage} disabled={loading} />}
          <ChatInput
            value={input}
            onChange={setInput}
            onSubmit={() => sendMessage(input)}
            disabled={loading}
          />
        </div>
      </aside>

      {selectedId && selectedMovie && (
        <div
          className="fixed inset-0 z-40 flex items-stretch justify-center bg-black/60 md:items-center md:p-6"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="h-full w-full overflow-hidden bg-background md:h-[85vh] md:max-w-md md:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MovieDetail
              movie={selectedMovie}
              saved={watchlist.includes(selectedMovie.id)}
              onClose={() => setSelectedId(null)}
              onToggleSave={() => handleToggleSave(selectedMovie.id)}
            />
          </div>
        </div>
      )}

      <Toast message={toast} visible={!!toast} />
    </div>
  )
}
