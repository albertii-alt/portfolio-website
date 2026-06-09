import { resume, profile } from '../../services/portfolio'

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest">{title}</h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  )
}

export default function ResumeApp() {
  return (
    <div className="h-full overflow-y-auto p-5 space-y-6">

      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
        <h1 className="text-base font-semibold text-white">{profile.name}</h1>
        <p className="text-sm text-sky-400">{profile.role}</p>
        <p className="text-xs text-slate-400">{profile.location}</p>
      </div>

      <div>
        <SectionHeader title="Summary" />
        <p className="text-sm text-slate-300 leading-relaxed">{resume.summary}</p>
      </div>

      <div>
        <SectionHeader title="Experience" />
        <p className="text-sm text-slate-300">{resume.experience}</p>
      </div>

      <div>
        <SectionHeader title="Key Strengths" />
        <ul className="space-y-2">
          {resume.strengths.map((strength, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-sky-400 shrink-0 mt-0.5">–</span>
              {strength}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SectionHeader title="Download" />
        {resume.downloadUrl ? (
          <a
            href={resume.downloadUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-sky-400/10 hover:bg-sky-400/20 text-sky-400 border border-sky-400/30 transition-colors duration-150"
          >
            ↓ Download Resume (PDF)
          </a>
        ) : (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-dashed border-white/10">
            <span className="text-amber-400 text-sm">⚠</span>
            <div>
              <p className="text-sm text-slate-300">Resume PDF not yet available</p>
              <p className="text-xs text-slate-400 mt-0.5">Contact via email — {profile.email}</p>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
