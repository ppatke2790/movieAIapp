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

export interface MoodChip {
  label: string
  kind: 'genre' | 'mood'
  value: string
}

export const MOOD_CHIPS: MoodChip[] = [
  { label: 'Comfort', kind: 'mood', value: 'comfort' },
  { label: 'Feel-good', kind: 'mood', value: 'feel-good' },
  { label: 'Intense', kind: 'mood', value: 'intense' },
  { label: 'Slow-burn', kind: 'mood', value: 'slow-burn' },
  { label: 'Comedy', kind: 'genre', value: 'Comedy' },
  { label: 'Sci-Fi', kind: 'genre', value: 'Sci-Fi' },
  { label: 'Thriller', kind: 'genre', value: 'Thriller' },
  { label: 'Romance', kind: 'genre', value: 'Romance' },
  { label: 'Horror', kind: 'genre', value: 'Horror' },
  { label: 'Action', kind: 'genre', value: 'Action' },
]

export const PROMPT_CHIPS = [
  'Comfort comedy under 2 hours',
  'Slow-burn sci-fi mystery',
  'Feel-good romance tonight',
  'Intense thriller, no jump scares',
  'Hidden gem from the 90s',
  'Something like Arrival but lighter',
]
