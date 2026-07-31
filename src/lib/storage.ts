import type { StreamingService, UserProfile } from '../types'

const PROFILE_KEY = 'movieai_profile'
const WATCHLIST_KEY = 'movieai_watchlist'

const DEFAULT_PROFILE: UserProfile = {
  onboardingComplete: false,
  favoriteGenres: [],
  favoriteMovies: [],
  streamingServices: [],
  region: 'US',
}

export function loadProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(PROFILE_KEY)
    if (!raw) return { ...DEFAULT_PROFILE }
    return { ...DEFAULT_PROFILE, ...JSON.parse(raw) }
  } catch {
    return { ...DEFAULT_PROFILE }
  }
}

export function saveProfile(profile: UserProfile): void {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
}

export function loadWatchlist(): string[] {
  try {
    const raw = localStorage.getItem(WATCHLIST_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveWatchlist(ids: string[]): void {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(ids))
}

export function toggleWatchlistItem(id: string): string[] {
  const current = loadWatchlist()
  const next = current.includes(id)
    ? current.filter((x) => x !== id)
    : [...current, id]
  saveWatchlist(next)
  return next
}

export function isOnWatchlist(id: string): boolean {
  return loadWatchlist().includes(id)
}

export function filterByUserServices<T extends { streaming: { service: StreamingService }[] }>(
  items: T[],
  services: StreamingService[],
): T[] {
  if (services.length === 0) return items
  return items.filter((item) =>
    item.streaming.some((s) => services.includes(s.service)),
  )
}
