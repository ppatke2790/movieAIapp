import { NavLink, Outlet } from 'react-router-dom'
import { loadWatchlist } from '../lib/storage'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'min-h-11 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
    isActive
      ? 'bg-surface-elevated text-text-primary'
      : 'text-text-muted hover:text-text-primary hover:bg-surface',
  ].join(' ')

export default function Layout() {
  const watchlistCount = loadWatchlist().length

  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent"
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h14v2H4v-2zm0 4h10v2H4v-2z" />
              </svg>
            </div>
            <div>
              <p className="text-base font-semibold leading-tight">MovieAI</p>
              <p className="text-xs text-text-muted">Decide what to watch</p>
            </div>
          </div>

          <nav className="flex items-center gap-1" aria-label="Main">
            <NavLink to="/" end className={navLinkClass}>
              Chat
            </NavLink>
            <NavLink to="/watchlist" className={navLinkClass}>
              Watchlist
              {watchlistCount > 0 && (
                <span className="ml-1.5 inline-flex min-w-5 items-center justify-center rounded-full bg-accent/20 px-1.5 text-xs text-accent">
                  {watchlistCount}
                </span>
              )}
            </NavLink>
            <NavLink to="/settings" className={navLinkClass}>
              Settings
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
