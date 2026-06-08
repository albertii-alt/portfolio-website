// Shared types — populated starting Milestone 3

export interface AppRegistryEntry {
  id: string
  name: string
  icon: string
  defaultSize: { width: number; height: number }
}

export interface WindowInstance {
  id: string
  appId: string
  title: string
  position: { x: number; y: number }
  size: { width: number; height: number }
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
  isActive: boolean
}
