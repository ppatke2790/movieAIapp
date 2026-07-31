import { Navigate, Route, Routes } from 'react-router-dom'
import { loadProfile } from './lib/storage'
import Layout from './components/Layout'
import OnboardingPage from './pages/OnboardingPage'
import ChatPage from './pages/ChatPage'
import WatchlistPage from './pages/WatchlistPage'
import SettingsPage from './pages/SettingsPage'

function RequireOnboarding({ children }: { children: React.ReactNode }) {
  const profile = loadProfile()
  if (!profile.onboardingComplete) {
    return <Navigate to="/onboarding" replace />
  }
  return <>{children}</>
}

export default function App() {
  return (
    <Routes>
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route
        element={
          <RequireOnboarding>
            <Layout />
          </RequireOnboarding>
        }
      >
        <Route index element={<ChatPage />} />
        <Route path="watchlist" element={<WatchlistPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
