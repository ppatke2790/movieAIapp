import { PROMPT_CHIPS } from '../types'

interface PromptChipsProps {
  onSelect: (prompt: string) => void
  disabled?: boolean
}

export default function PromptChips({ onSelect, disabled }: PromptChipsProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Suggested prompts"
    >
      {PROMPT_CHIPS.map((chip) => (
        <button
          key={chip}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(chip)}
          className="min-h-11 rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-text-primary transition-colors hover:border-accent/40 hover:bg-surface-elevated disabled:cursor-not-allowed disabled:opacity-50"
        >
          {chip}
        </button>
      ))}
    </div>
  )
}
