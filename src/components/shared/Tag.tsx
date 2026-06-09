import type { ReactNode } from 'react'

interface TagProps {
  label: string
  variant?: 'default' | 'accent'
}

export default function Tag({ label, variant = 'default' }: TagProps): ReactNode {
  const base = 'inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border'
  const accent = 'bg-sky-400/10 text-sky-400 border-sky-400/30'
  const def = 'bg-white/5 text-slate-400 border-white/10'

  return (
    <span className={`${base} ${variant === 'accent' ? accent : def}`}>
      {label}
    </span>
  )
}
