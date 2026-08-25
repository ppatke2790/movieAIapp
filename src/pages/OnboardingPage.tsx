import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GENRES, STREAMING_SERVICES } from '../types'
import type { StreamingService } from '../types'
import { MOVIES } from '../data/movies'
import { loadProfile, saveProfile } from '../lib/storage'

const REGIONS = [
  { id: 'US', label: 'United States' },
  { id: 'GB', label: 'United Kingdom' },
  { id: 'CA', label: 'Canada' },
  { id: 'AU', label: 'Australia' },
]

function toggleValue<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

export default function OnboardingPage() {
  const navigate = useNavigate()
  const existing = loadProfile()

  const [genres, setGenres] = useState<string[]>(existing.favoriteGenres)
  const [favorites, setFavorites] = useState<string[]>(existing.favoriteMovies)
  const [services, setServices] = useState<StreamingService[]>(existing.streamingServices)
  const [region, setRegion] = useState(existing.region)

  const canContinue = genres.length > 0 && services.length > 0

  const finish = () => {
    saveProfile({
      onboardingComplete: true,
      favoriteGenres: genres,
      favoriteMovies: favorites,
      streamingServices: services,
      region,
    })
    navigate('/', { replace: true })
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-semibold">Let's tune your picks</h1>
        <p className="mt-2 text-sm text-text-muted">
          Takes 30 seconds. You can change this anytime in Settings.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-sm font-semibold">What genres do you like?</h2>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Favorite genres">
            {GENRES.map((genre) => (
              <button
                key={genre}
                type="button"
                onClick={() => setGenres((prev) => toggleValue(prev, genre))}
                aria-pressed={genres.includes(genre)}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm transition-colors ${
                  genres.includes(genre)
                    ? 'border-accent bg-accent/15 text-accent'
                    : 'border-white/10 bg-surface text-text-primary hover:border-white/20'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold">Which of these have you loved?</h2>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Favorite movies">
            {MOVIES.slice(0, 8).map((movie) => (
              <button
                key={movie.id}
                type="button"
                onClick={() => setFavorites((prev) => toggleValue(prev, movie.id))}
                aria-pressed={favorites.includes(movie.id)}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm transition-colors ${
                  favorites.includes(movie.id)
                    ? 'border-accent bg-accent/15 text-accent'
                    : 'border-white/10 bg-surface text-text-primary hover:border-white/20'
                }`}
              >
                {movie.title}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold">Which services do you subscribe to?</h2>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Streaming services">
            {STREAMING_SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setServices((prev) => toggleValue(prev, service.id))}
                aria-pressed={services.includes(service.id)}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm transition-colors ${
                  services.includes(service.id)
                    ? 'border-accent bg-accent/15 text-accent'
                    : 'border-white/10 bg-surface text-text-primary hover:border-white/20'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold">Region</h2>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="mt-3 min-h-11 w-full rounded-xl border border-white/10 bg-surface px-4 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {REGIONS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
              </option>
            ))}
          </select>
        </section>
      </div>

      <div className="mt-10 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={finish}
          className="min-h-11 rounded-xl px-4 text-sm text-text-muted hover:text-text-primary"
        >
          Skip for now
        </button>
        <button
          type="button"
          onClick={finish}
          disabled={!canContinue}
          className="min-h-11 rounded-xl bg-accent px-6 text-sm font-semibold text-background transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
        >
          Start discovering →
        </button>
      </div>
    </div>
  )
}
