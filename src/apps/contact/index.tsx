import { profile } from '../../services/portfolio'

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest">{title}</h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  )
}

interface ContactRowProps {
  icon: string
  label: string
  value: string
  href?: string
  muted?: boolean
}

function ContactRow({ icon, label, value, href, muted }: ContactRowProps) {
  const containerClass = muted
    ? 'flex items-center gap-3 p-3 rounded-xl border bg-white/5 border-white/5 opacity-40'
    : 'flex items-center gap-3 p-3 rounded-xl border bg-white/5 border-white/10 hover:border-white/20 transition-colors duration-150'

  const valueClass = muted
    ? 'text-sm truncate text-slate-500'
    : href
      ? 'text-sm truncate text-sky-400'
      : 'text-sm truncate text-slate-300'

  const content = (
    <div className={containerClass}>
      <span className="text-base w-6 text-center shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-widest font-semibold mb-0.5 text-slate-400">
          {label}
        </p>
        <p className={valueClass}>{value}</p>
      </div>
    </div>
  )

  if (href && !muted) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  }
  return content
}

export default function ContactApp() {
  return (
    <div className="h-full overflow-y-auto p-5 space-y-6">

      <div className="flex items-center gap-2 p-3 rounded-xl bg-sky-400/10 border border-sky-400/20">
        <span className="text-sky-400 text-sm">✦</span>
        <p className="text-xs text-slate-300">
          Preferred contact method: <span className="text-white font-medium">Email</span>
        </p>
      </div>

      <div>
        <SectionHeader title="Contact Methods" />
        <div className="space-y-2">
          <ContactRow icon="✉️" label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactRow icon="⌥" label="GitHub" value={profile.github} href={profile.github} />
          {profile.linkedin ? (
            <ContactRow icon="in" label="LinkedIn" value={profile.linkedin} href={profile.linkedin} />
          ) : (
            <ContactRow icon="in" label="LinkedIn" value="Not yet available" muted />
          )}
          <ContactRow icon="👤" label="Facebook" value={profile.facebook} />
        </div>
      </div>

      <div>
        <SectionHeader title="Availability" />
        <p className="text-sm text-slate-300 leading-relaxed">
          Open to internship opportunities, freelance projects, and collaboration on
          real-world systems. Feel free to reach out via email for the fastest response.
        </p>
      </div>

    </div>
  )
}
