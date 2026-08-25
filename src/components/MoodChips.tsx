import type { MoodChip } from '../types'

interface MoodChipsProps {
  chips: MoodChip[]
  activeValue: string | null
  onSelect: (value: string | null) => void
}

export default function MoodChips({ chips, activeValue, onSelect }: MoodChipsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by mood or genre">
      {chips.map((chip) => {
        const active = chip.value === activeValue
        return (
          <button
            key={chip.value}
            type="button"
            onClick={() => onSelect(active ? null : chip.value)}
            aria-pressed={active}
            className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active
                ? 'border-accent bg-accent/15 text-accent'
                : 'border-white/10 bg-surface text-text-primary hover:border-white/20 hover:bg-surface-elevated'
            }`}
          >
            {chip.label}
          </button>
        )
      })}
    </div>
  )
}
