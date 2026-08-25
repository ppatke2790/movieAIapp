import { useState } from 'react'
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
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="shrink-0 border-b border-white/5 bg-background/90 backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <div>
            <p className="text-3xl font-black leading-none tracking-tight text-accent">ReelAI</p>
            <div className="mt-1.5 flex items-center gap-2">
              <div className="flex gap-[3px]" aria-hidden="true">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 shrink-0 rounded-[1px] bg-accent/60" />
                ))}
              </div>
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
            <button
              type="button"
              onClick={() => setAuthOpen(true)}
              className="min-h-11 rounded-lg border border-accent/40 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
            >
              Sign up / Log in
            </button>
          </nav>
        </div>
      </header>

      <main className="min-h-0 flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {authOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setAuthOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl border border-white/10 bg-surface p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="auth-modal-title" className="text-lg font-semibold">
              Sign up / Log in
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Accounts aren't available yet — ReelAI currently saves your picks and watchlist on
              this device only. Check back soon!
            </p>
            <button
              type="button"
              onClick={() => setAuthOpen(false)}
              className="mt-6 min-h-11 w-full rounded-xl bg-accent px-4 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
