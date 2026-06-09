import { projects } from '../../services/portfolio'
import ProjectCard from './ProjectCard'

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <h2 className="text-xs font-semibold text-sky-400 uppercase tracking-widest">{title}</h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  )
}

export default function ProjectsApp() {
  return (
    <div className="h-full overflow-y-auto p-5 space-y-4">
      <SectionHeader title={`Projects — ${projects.length} total`} />
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
