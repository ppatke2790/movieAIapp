import { useCallback, useEffect, useState } from 'react'
import { loadProfile, loadWatchlist, toggleWatchlistItem } from '../lib/storage'

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<string[]>(() => loadWatchlist())

  const toggle = useCallback((id: string) => {
    const next = toggleWatchlistItem(id)
    setWatchlist(next)
    return next
  }, [])

  const refresh = useCallback(() => {
    setWatchlist(loadWatchlist())
  }, [])

  return { watchlist, toggle, refresh }
}

export function useProfile() {
  const [profile, setProfileState] = useState(loadProfile)

  const refresh = useCallback(() => {
    setProfileState(loadProfile())
  }, [])

  useEffect(() => {
    const onStorage = () => refresh()
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [refresh])

  return { profile, refresh }
}
