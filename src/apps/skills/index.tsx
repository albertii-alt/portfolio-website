import { skills } from '../../services/portfolio'

function SectionHeader({ title, icon }: { title: string; icon?: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      {icon && <span className="text-sky-400 text-sm">{icon}</span>}
      <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest">{title}</h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  )
}

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border bg-sky-400/10 text-sky-400 border-sky-400/30">
      {label}
    </span>
  )
}

const CATEGORY_ICONS: Record<string, string> = {
  Languages: '{ }',
  Frontend: '◈',
  Backend: '⚙',
  Databases: '⊞',
  'Tools & Platforms': '⚒',
}

export default function SkillsApp() {
  return (
    <div className="h-full overflow-y-auto p-5 space-y-6">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <SectionHeader title={category} icon={CATEGORY_ICONS[category] ?? '▸'} />
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <Pill key={skill} label={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
