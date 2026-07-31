export type StreamingService = 'netflix' | 'max' | 'apple' | 'hulu' | 'prime' | 'disney'

export interface StreamingOption {
  service: StreamingService
  label: string
  url: string
}

export interface Movie {
  id: string
  title: string
  year: number
  runtime: number
  rating: number
  genres: string[]
  moods: string[]
  synopsis: string
  posterPath: string
  trailerUrl?: string
  streaming: StreamingOption[]
  rationaleTemplates: string[]
}

export interface RecommendedMovie extends Movie {
  rationale: string
}

export interface UserProfile {
  onboardingComplete: boolean
  favoriteGenres: string[]
  favoriteMovies: string[]
  streamingServices: StreamingService[]
  region: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  movies?: RecommendedMovie[]
  status?: 'loading' | 'error' | 'success'
  errorMessage?: string
}

export const GENRES = [
  'Action',
  'Comedy',
  'Drama',
  'Horror',
  'Romance',
  'Sci-Fi',
  'Thriller',
  'Documentary',
] as const

export const STREAMING_SERVICES: { id: StreamingService; label: string }[] = [
  { id: 'netflix', label: 'Netflix' },
  { id: 'max', label: 'Max' },
  { id: 'apple', label: 'Apple TV+' },
  { id: 'hulu', label: 'Hulu' },
  { id: 'prime', label: 'Prime Video' },
  { id: 'disney', label: 'Disney+' },
]

export const PROMPT_CHIPS = [
  'Comfort comedy under 2 hours',
  'Slow-burn sci-fi mystery',
  'Feel-good romance tonight',
  'Intense thriller, no jump scares',
  'Hidden gem from the 90s',
  'Something like Arrival but lighter',
]
