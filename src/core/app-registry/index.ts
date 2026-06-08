import { lazy } from 'react'
import type { AppRegistryEntry } from '../../types'

export const APP_REGISTRY: AppRegistryEntry[] = [
  {
    id: 'about',
    name: 'About',
    icon: '👤',
    defaultSize: { width: 680, height: 480 },
    component: lazy(() => import('../../apps/about')),
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: '🗂️',
    defaultSize: { width: 800, height: 560 },
    component: lazy(() => import('../../apps/projects')),
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: '⚡',
    defaultSize: { width: 640, height: 480 },
    component: lazy(() => import('../../apps/skills')),
  },
  {
    id: 'resume',
    name: 'Resume',
    icon: '📄',
    defaultSize: { width: 680, height: 520 },
    component: lazy(() => import('../../apps/resume')),
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: '✉️',
    defaultSize: { width: 560, height: 440 },
    component: lazy(() => import('../../apps/contact')),
  },
  {
    id: 'terminal',
    name: 'Terminal',
    icon: '>_',
    defaultSize: { width: 640, height: 400 },
    component: lazy(() => import('../../apps/terminal')),
  },
  {
    id: 'ai-assistant',
    name: 'AI Assistant',
    icon: '✦',
    defaultSize: { width: 520, height: 560 },
    component: lazy(() => import('../../apps/ai-assistant')),
  },
]

export function getAppById(id: string): AppRegistryEntry | undefined {
  return APP_REGISTRY.find((app) => app.id === id)
}
