import { profile, about, skills, projects, resume } from '../../../services/portfolio'

// Each command is a function that returns an array of output lines.
// No switch statements. No if/else chains.
// Adding a new command = adding one entry to this object.

type CommandHandler = () => string[]

export const commandRegistry: Record<string, CommandHandler> = {

  help() {
    return [
      '',
      '  Available commands:',
      '',
      '  about        About Jay-ar',
      '  whoami       Identity summary',
      '  skills       Technical skill set',
      '  projects     List of projects',
      '  contact      Contact information',
      '  resume       Resume summary',
      '  neofetch     System profile card',
      '  clear        Clear the terminal',
      '  help         Show this help menu',
      '',
    ]
  },

  whoami() {
    return [
      '',
      `  ${profile.displayName} (${profile.name})`,
      `  ${profile.role}`,
      `  ${profile.location}`,
      '',
      `  "${profile.tagline}"`,
      '',
    ]
  },

  about() {
    return [
      '',
      ...about.bio.map((p) => `  ${p}`).flatMap((line) => [line, '']),
      `  Education: ${about.education.program} — ${about.education.institution}`,
      `  Year:      ${about.education.year}`,
      '',
    ]
  },

  skills() {
    const lines: string[] = ['']
    for (const [category, items] of Object.entries(skills)) {
      lines.push(`  ${category}`)
      lines.push(`  ${'─'.repeat(category.length)}`)
      items.forEach((s) => lines.push(`    • ${s}`))
      lines.push('')
    }
    return lines
  },

  projects() {
    const lines: string[] = ['', `  ${projects.length} projects found:`, '']
    projects.forEach((p, i) => {
      lines.push(`  ${i + 1}. ${p.name}`)
      lines.push(`     Status: ${p.status}`)
      lines.push(`     Repo:   https://github.com/${p.repo}`)
      if (p.liveUrl) lines.push(`     Live:   ${p.liveUrl}`)
      lines.push('')
    })
    return lines
  },

  contact() {
    return [
      '',
      '  Contact Information',
      '  ───────────────────',
      `  Email:    ${profile.email}`,
      `  GitHub:   ${profile.github}`,
      `  LinkedIn: ${profile.linkedin || 'Not yet available'}`,
      `  Facebook: ${profile.facebook}`,
      '',
      `  Preferred contact method: ${profile.preferredContact}`,
      '',
    ]
  },

  resume() {
    return [
      '',
      '  Resume Summary',
      '  ──────────────',
      `  ${resume.summary}`,
      '',
      '  Key Strengths:',
      ...resume.strengths.map((s) => `    • ${s}`),
      '',
      `  Download: ${resume.downloadUrl ?? 'Coming soon — contact via email in the meantime'}`,
      '',
    ]
  },

  neofetch() {
    const cat = Object.keys(skills)
    const allSkills = Object.values(skills).flat()
    return [
      '',
      '        .\'-.        guest@portfolio',
      '       /    \\       ───────────────',
      '      |  OS  |      OS:       Portfolio OS v1.0',
      '       \\    /       Name:     ' + profile.displayName,
      "        `--'        Role:     " + profile.role,
      '                    Location: ' + profile.location,
      '                    School:   ' + about.education.institution,
      '                    Program:  ' + about.education.program,
      '                    Year:     ' + about.education.year,
      '                    Projects: ' + projects.length,
      '                    Skills:   ' + allSkills.length + ' across ' + cat.length + ' categories',
      '                    Email:    ' + profile.email,
      '                    GitHub:   ' + profile.github,
      '',
    ]
  },
}
