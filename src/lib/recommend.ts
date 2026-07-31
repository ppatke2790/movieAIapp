import { MOVIES } from '../data/movies'
import type { RecommendedMovie, StreamingService, UserProfile } from '../types'
import { filterByUserServices } from './storage'

const KEYWORD_MAP: Record<string, string[]> = {
  comedy: ['comfort', 'whimsical', 'absurd', 'fun', 'light'],
  comfort: ['comfort', 'wholesome', 'feel-good', 'light'],
  thriller: ['intense', 'tension', 'suspense', 'clever', 'twisty'],
  horror: ['tension', 'intense'],
  'sci-fi': ['thoughtful', 'slow-burn', 'atmospheric', 'near-future', 'visual'],
  scifi: ['thoughtful', 'slow-burn', 'atmospheric', 'near-future', 'visual'],
  romance: ['romantic', 'intimate', 'emotional'],
  action: ['adrenaline', 'energetic', 'visual'],
  drama: ['emotional', 'intimate', 'artful'],
  mystery: ['mystery', 'clever', 'twisty', 'slow-burn'],
  short: [],
  '90s': ['90s'],
  'under 2 hours': [],
  'under two hours': [],
  arrival: ['thoughtful', 'slow-burn', 'mystery'],
  lighter: ['comfort', 'light', 'feel-good'],
  'jump scares': [],
  'no jump scares': ['clever', 'slow-burn'],
  'feel-good': ['feel-good', 'wholesome', 'comfort'],
  hidden: ['artful', '90s'],
  gem: ['artful', '90s'],
  slow: ['slow-burn', 'thoughtful', 'atmospheric'],
  intense: ['intense', 'tension', 'adrenaline'],
  emotional: ['emotional', 'intimate'],
}

function extractKeywords(prompt: string): string[] {
  const lower = prompt.toLowerCase()
  const found = new Set<string>()

  for (const [key, moods] of Object.entries(KEYWORD_MAP)) {
    if (lower.includes(key)) {
      found.add(key)
      moods.forEach((m) => found.add(m))
    }
  }

  for (const genre of ['action', 'comedy', 'drama', 'horror', 'romance', 'thriller', 'documentary']) {
    if (lower.includes(genre)) found.add(genre)
  }

  if (lower.includes('sci')) found.add('sci-fi')

  return [...found]
}

function scoreMovie(
  movie: (typeof MOVIES)[0],
  keywords: string[],
  profile: UserProfile,
): number {
  let score = 0

  for (const kw of keywords) {
    if (movie.genres.some((g) => g.toLowerCase().includes(kw))) score += 3
    if (movie.moods.some((m) => m.includes(kw))) score += 2
    if (movie.title.toLowerCase().includes(kw)) score += 5
  }

  for (const genre of profile.favoriteGenres) {
    if (movie.genres.includes(genre)) score += 4
  }

  for (const fav of profile.favoriteMovies) {
    const favMovie = MOVIES.find((m) => m.id === fav)
    if (favMovie) {
      const sharedGenres = movie.genres.filter((g) => favMovie.genres.includes(g))
      score += sharedGenres.length * 2
    }
  }

  if (profile.streamingServices.length > 0) {
    const available = movie.streaming.some((s) =>
      profile.streamingServices.includes(s.service),
    )
    if (available) score += 3
  }

  const wantsShort =
    keywords.some((k) => k.includes('short') || k.includes('under') || k.includes('90'))
  if (wantsShort && movie.runtime <= 105) score += 3

  const wants90s = keywords.includes('90s')
  if (wants90s && movie.year >= 1990 && movie.year <= 1999) score += 4

  const wantsNoJumpScares =
    keywords.includes('no jump scares') || keywords.includes('jump scares')
  if (wantsNoJumpScares && !movie.genres.includes('Horror')) score += 2

  score += Math.random() * 0.5
  return score
}

function pickRationale(movie: (typeof MOVIES)[0], prompt: string): string {
  const templates = movie.rationaleTemplates
  const index = Math.abs(hashString(prompt + movie.id)) % templates.length
  return templates[index] ?? templates[0]
}

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return hash
}

export async function getRecommendations(
  prompt: string,
  profile: UserProfile,
): Promise<{ intro: string; movies: RecommendedMovie[] }> {
  await delay(800 + Math.random() * 1200)

  if (!navigator.onLine) {
    throw new Error('You appear to be offline. Check your connection and try again.')
  }

  const keywords = extractKeywords(prompt)
  let pool = [...MOVIES]

  if (profile.streamingServices.length > 0) {
    const filtered = filterByUserServices(pool, profile.streamingServices)
    if (filtered.length >= 3) pool = filtered
  }

  const scored = pool
    .map((movie) => ({ movie, score: scoreMovie(movie, keywords, profile) }))
    .sort((a, b) => b.score - a.score)

  const top = scored.slice(0, 5).map(({ movie }) => ({
    ...movie,
    rationale: pickRationale(movie, prompt),
  }))

  const fallback = scored.length < 3
    ? MOVIES.slice(0, 5).map((movie) => ({
        ...movie,
        rationale: pickRationale(movie, prompt),
      }))
    : top

  const movies = (fallback.length >= 3 ? fallback : top).slice(0, 5)

  const intro = buildIntro(prompt, movies.length)
  return { intro, movies }
}

function buildIntro(prompt: string, count: number): string {
  const lower = prompt.toLowerCase()
  if (lower.includes('comfort') || lower.includes('feel-good')) {
    return `Here are ${count} picks that should hit that comfort mood — spoiler-free and ready to stream.`
  }
  if (lower.includes('thriller') || lower.includes('intense')) {
    return `Found ${count} tight picks with tension but no cheap tricks.`
  }
  if (lower.includes('sci') || lower.includes('arrival')) {
    return `${count} thoughtful sci-fi options — slow burns and smart premises.`
  }
  if (lower.includes('90')) {
    return `${count} gems worth your time, including some 90s favorites.`
  }
  return `Based on what you asked for, here are ${count} movies worth considering tonight.`
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function getServiceLabel(service: StreamingService): string {
  const labels: Record<StreamingService, string> = {
    netflix: 'Netflix',
    max: 'Max',
    apple: 'Apple TV+',
    hulu: 'Hulu',
    prime: 'Prime Video',
    disney: 'Disney+',
  }
  return labels[service]
}

export function getServiceColor(service: StreamingService): string {
  const colors: Record<StreamingService, string> = {
    netflix: '#E50914',
    max: '#002BE7',
    apple: '#555555',
    hulu: '#1CE783',
    prime: '#00A8E1',
    disney: '#113CCF',
  }
  return colors[service]
}
