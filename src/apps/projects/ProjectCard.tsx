import { useState } from 'react'
import type { ReactNode } from 'react'
import type { Project } from '../../../services/portfolio'

interface ProjectCardProps {
  project: Project
}

const STATUS_MAP: Record<string, string> = {
  'production-ready':   'bg-green-500/10 text-green-400 border-green-500/30',
  'active development': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'mvp complete':       'bg-sky-400/10 text-sky-400 border-sky-400/30',
  'deployed and live':  'bg-green-500/10 text-green-400 border-green-500/30',
  'complete':           'bg-white/10 text-slate-400 border-white/10',
}

function statusClass(status: string): string {
  const key = Object.keys(STATUS_MAP).find((k) => status.toLowerCase().startsWith(k))
  return key ? STATUS_MAP[key] : 'bg-white/10 text-slate-400 border-white/10'
}

function Pill({ label }: { label: string }): ReactNode {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border bg-white/5 text-slate-400 border-white/10">
      {label}
    </span>
  )
}

export default function ProjectCard({ project }: ProjectCardProps): ReactNode {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-colors duration-150 hover:border-white/20">

      {/* Header */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left p-4 flex items-start justify-between gap-3"
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${statusClass(project.status)}`}>
              {project.status}
            </span>
          </div>
          <h3 className="text-sm font-semibold text-white leading-snug">{project.name}</h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">{project.description}</p>
        </div>
        <span className={`text-sky-400 text-xs mt-1 shrink-0 transition-transform duration-150 ${expanded ? 'rotate-90' : ''}`}>
          ▶
        </span>
      </button>

      {/* Tech strip */}
      <div className="px-4 pb-3 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <Pill key={t.layer} label={t.stack.split(' ')[0]} />
        ))}
        {project.tech.length > 4 && <Pill label={`+${project.tech.length - 4} more`} />}
      </div>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-white/10 p-4 space-y-4 bg-white/5">

          <div>
            <p className="text-[10px] font-semibold text-sky-400 uppercase tracking-widest mb-1">Problem Solved</p>
            <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-sky-400 uppercase tracking-widest mb-2">Tech Stack</p>
            <div className="space-y-1">
              {project.tech.map((t) => (
                <div key={t.layer} className="flex gap-2 text-xs">
                  <span className="text-slate-400 w-24 shrink-0">{t.layer}</span>
                  <span className="text-slate-300">{t.stack}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-sky-400 uppercase tracking-widest mb-2">Highlights</p>
            <ul className="space-y-1">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-sky-400 mt-0.5 shrink-0">–</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <a
              href={`https://github.com/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors duration-150"
            >
              <span>⌥</span> View on GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-white transition-colors duration-150"
              >
                <span>↗</span> Live Demo
              </a>
            )}
          </div>

        </div>
      )}
    </div>
  )
}
