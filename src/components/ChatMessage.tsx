import type { ChatMessage as ChatMessageType } from '../types'
import MovieCard from './MovieCard'
import MovieCardSkeleton from './MovieCardSkeleton'

interface ChatMessageProps {
  message: ChatMessageType
  watchlist: string[]
  onSelectMovie: (id: string) => void
  onToggleSave: (id: string) => void
  onRetry?: () => void
}

export default function ChatMessage({
  message,
  watchlist,
  onSelectMovie,
  onToggleSave,
  onRetry,
}: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-3xl space-y-3 ${
          isUser
            ? 'rounded-2xl rounded-br-md bg-accent/15 px-4 py-3 text-[15px]'
            : 'w-full'
        }`}
      >
        {!isUser && message.status === 'loading' && (
          <div className="space-y-3">
            <p className="text-sm text-text-muted">Finding picks for you…</p>
            <MovieCardSkeleton />
            <MovieCardSkeleton />
          </div>
        )}

        {!isUser && message.status === 'error' && (
          <div className="rounded-2xl border border-error/30 bg-error/10 p-4">
            <p className="text-sm">{message.errorMessage ?? 'Something went wrong.'}</p>
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="mt-3 min-h-11 rounded-xl bg-surface px-4 py-2 text-sm font-medium hover:bg-surface-elevated"
              >
                Try again
              </button>
            )}
          </div>
        )}

        {(isUser || message.status === 'success' || !message.status) && message.content && (
          <p className={`text-[15px] leading-relaxed ${isUser ? '' : 'text-text-primary'}`}>
            {message.content}
          </p>
        )}

        {!isUser && message.movies && message.movies.length > 0 && (
          <div className="space-y-3">
            {message.movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                saved={watchlist.includes(movie.id)}
                onSelect={() => onSelectMovie(movie.id)}
                onToggleSave={() => onToggleSave(movie.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
