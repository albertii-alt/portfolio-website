import type { ReactNode } from 'react'

interface SectionHeaderProps {
  title: string
  icon?: string
}

export default function SectionHeader({ title, icon }: SectionHeaderProps): ReactNode {
  return (
    <div className="flex items-center gap-2 mb-3">
      {icon && <span className="text-sky-400 text-sm">{icon}</span>}
      <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
        {title}
      </h2>
      <div className="flex-1 h-px bg-white/10 ml-1" />
    </div>
  )
}
