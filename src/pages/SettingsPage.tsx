import { useState } from 'react'
import { Link } from 'react-router-dom'
import { STREAMING_SERVICES } from '../types'
import type { StreamingService, UserProfile } from '../types'
import { loadProfile, saveProfile } from '../lib/storage'

const REGIONS = [
  { id: 'US', label: 'United States' },
  { id: 'GB', label: 'United Kingdom' },
  { id: 'CA', label: 'Canada' },
  { id: 'AU', label: 'Australia' },
]

export default function SettingsPage() {
  const [profile, setProfile] = useState<UserProfile>(loadProfile)
  const [saved, setSaved] = useState(false)

  const update = (patch: Partial<UserProfile>) => {
    const next = { ...profile, ...patch }
    setProfile(next)
    saveProfile(next)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  const toggleService = (id: StreamingService) => {
    const next = profile.streamingServices.includes(id)
      ? profile.streamingServices.filter((service) => service !== id)
      : [...profile.streamingServices, id]
    update({ streamingServices: next })
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 md:px-6">
      <h1 className="text-xl font-semibold">Settings</h1>

      <section className="mt-8">
        <h2 className="text-sm font-semibold">Region</h2>
        <p className="mt-1 text-sm text-text-muted">Used to filter what's available to stream.</p>
        <select
          value={profile.region}
          onChange={(e) => update({ region: e.target.value })}
          className="mt-3 min-h-11 w-full rounded-xl border border-white/10 bg-surface px-4 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {REGIONS.map((r) => (
            <option key={r.id} value={r.id}>
              {r.label}
            </option>
          ))}
        </select>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold">Connected services</h2>
        <p className="mt-1 text-sm text-text-muted">
          Recommendations are prioritized for what you already subscribe to.
        </p>
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Streaming services">
          {STREAMING_SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => toggleService(service.id)}
              aria-pressed={profile.streamingServices.includes(service.id)}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm transition-colors ${
                profile.streamingServices.includes(service.id)
                  ? 'border-accent bg-accent/15 text-accent'
                  : 'border-white/10 bg-surface text-text-primary hover:border-white/20'
              }`}
            >
              {service.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold">Taste profile</h2>
        <p className="mt-1 text-sm text-text-muted">
          Update the genres and favorites you told us about.
        </p>
        <Link
          to="/onboarding"
          className="mt-3 inline-flex min-h-11 items-center rounded-xl border border-white/10 px-4 text-sm hover:border-accent/40"
        >
          Retake taste quiz
        </Link>
      </section>

      <section className="mt-8 border-t border-white/8 pt-8">
        <h2 className="text-sm font-semibold">Account</h2>
        <p className="mt-1 text-sm text-text-muted">
          Sign-in isn't available yet — your picks and watchlist are saved on this device only.
        </p>
      </section>

      <p
        role="status"
        aria-live="polite"
        className={`mt-6 text-sm text-accent transition-opacity ${saved ? 'opacity-100' : 'opacity-0'}`}
      >
        Saved
      </p>
    </div>
  )
}
