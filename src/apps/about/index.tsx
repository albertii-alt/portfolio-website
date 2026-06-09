import { profile, about } from '../../services/portfolio'

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest">{title}</h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  )
}

export default function AboutApp() {
  return (
    <div className="h-full overflow-y-auto p-5 space-y-6">

      {/* Profile Card */}
      <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="w-14 h-14 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-2xl shrink-0">
          👤
        </div>
        <div className="min-w-0">
          <h1 className="text-base font-semibold text-white leading-tight">{profile.name}</h1>
          <p className="text-sm text-sky-400 mt-0.5">{profile.role}</p>
          <p className="text-xs text-slate-400 mt-1">📍 {profile.location}</p>
          <p className="text-xs text-slate-300 mt-2 italic">"{profile.tagline}"</p>
        </div>
      </div>

      {/* About Me */}
      <div>
        <SectionHeader title="About Me" />
        <div className="space-y-3">
          {about.bio.map((paragraph, i) => (
            <p key={i} className="text-sm text-slate-300 leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <SectionHeader title="Education" />
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
          <p className="text-sm font-medium text-white">{about.education.institution}</p>
          <p className="text-sm text-slate-300">{about.education.program}</p>
          <p className="text-xs text-slate-400">{about.education.year}</p>
        </div>
      </div>

    </div>
  )
}
