import type { StreamingOption } from '../types'
import { getServiceColor } from '../lib/recommend'

interface AvailabilityRowProps {
  options: StreamingOption[]
}

export default function AvailabilityRow({ options }: AvailabilityRowProps) {
  if (options.length === 0) {
    return (
      <p className="text-sm text-text-muted">
        Not available on your selected services in this region. Try rent or buy on Apple TV or Prime.
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-2">
      {options.map((option) => (
        <li key={option.service}>
          <a
            href={option.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center justify-between gap-3 rounded-xl border border-white/10 bg-surface-elevated px-4 py-3 text-sm transition-colors hover:border-accent/30"
          >
            <span className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: getServiceColor(option.service) }}
                aria-hidden="true"
              />
              <span className="font-medium">{option.label}</span>
            </span>
            <span className="text-accent">Open →</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
