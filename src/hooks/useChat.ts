import { useCallback, useRef, useState } from 'react'
import { getRecommendations } from '../lib/recommend'
import { loadProfile } from '../lib/storage'
import type { ChatMessage, RecommendedMovie } from '../types'

function createId() {
  return crypto.randomUUID()
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: createId(),
      role: 'assistant',
      content:
        'Tell me what you\'re in the mood for — runtime, genre, or a movie you loved recently. I\'ll suggest a few picks you can actually stream.',
      status: 'success',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const lastPromptRef = useRef<string>('')

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    lastPromptRef.current = trimmed
    const userMessage: ChatMessage = {
      id: createId(),
      role: 'user',
      content: trimmed,
    }

    const loadingMessage: ChatMessage = {
      id: createId(),
      role: 'assistant',
      content: '',
      status: 'loading',
    }

    setMessages((prev) => [...prev, userMessage, loadingMessage])
    setInput('')
    setLoading(true)

    try {
      const profile = loadProfile()
      const { intro, movies } = await getRecommendations(trimmed, profile)

      setMessages((prev) =>
        prev.map((m) =>
          m.id === loadingMessage.id
            ? {
                ...m,
                content: intro,
                movies,
                status: 'success' as const,
              }
            : m,
        ),
      )
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Couldn\'t fetch recommendations. Please try again.'

      setMessages((prev) =>
        prev.map((m) =>
          m.id === loadingMessage.id
            ? {
                ...m,
                content: '',
                status: 'error' as const,
                errorMessage,
              }
            : m,
        ),
      )
    } finally {
      setLoading(false)
    }
  }, [loading])

  const retry = useCallback(() => {
    if (lastPromptRef.current) {
      setMessages((prev) => {
        const withoutError = prev.filter((m) => m.status !== 'error')
        return withoutError.slice(0, -1)
      })
      sendMessage(lastPromptRef.current)
    }
  }, [sendMessage])

  const findMovieInMessages = useCallback(
    (id: string): RecommendedMovie | undefined => {
      for (const msg of messages) {
        const found = msg.movies?.find((m) => m.id === id)
        if (found) return found
      }
      return undefined
    },
    [messages],
  )

  return {
    messages,
    input,
    setInput,
    loading,
    sendMessage,
    retry,
    findMovieInMessages,
  }
}
