import { create } from 'zustand'
import { getAppById } from '../core/app-registry'
import type { WindowInstance } from '../types'

interface WindowStore {
  windows: WindowInstance[]
  openWindow: (appId: string) => void
  closeWindow: (windowId: string) => void
  focusWindow: (windowId: string) => void
  minimizeWindow: (windowId: string) => void
  maximizeWindow: (windowId: string) => void
  updatePosition: (windowId: string, position: { x: number; y: number }) => void
}

let zCounter = 10

function nextZ() {
  return ++zCounter
}

function centeredPosition(width: number, height: number) {
  const x = Math.max(0, (window.innerWidth - width) / 2)
  const y = Math.max(0, (window.innerHeight - height) / 2 - 40)
  return { x, y }
}

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],

  openWindow(appId) {
    const app = getAppById(appId)
    if (!app) return

    const { name, icon, defaultSize: size } = app

    set((state) => {
      const existing = state.windows.find((w) => w.appId === appId)
      if (existing) {
        const z = nextZ()
        return {
          windows: state.windows.map((w) =>
            w.id === existing.id
              ? { ...w, isMinimized: false, isActive: true, zIndex: z }
              : { ...w, isActive: false }
          ),
        }
      }

      const id = `${appId}-${Date.now()}`
      const z = nextZ()
      const position = centeredPosition(size.width, size.height)
      const offset = state.windows.length * 24
      position.x += offset
      position.y += offset

      const newWindow: WindowInstance = {
        id,
        appId,
        title: name,
        icon,
        position,
        size,
        isMinimized: false,
        isMaximized: false,
        zIndex: z,
        isActive: true,
      }

      return {
        windows: [
          ...state.windows.map((w) => ({ ...w, isActive: false })),
          newWindow,
        ],
      }
    })
  },

  closeWindow(windowId) {
    set((state) => {
      const remaining = state.windows.filter((w) => w.id !== windowId)
      if (remaining.length > 0) {
        const top = [...remaining].sort((a, b) => b.zIndex - a.zIndex)[0]
        return {
          windows: remaining.map((w) => ({ ...w, isActive: w.id === top.id })),
        }
      }
      return { windows: [] }
    })
  },

  focusWindow(windowId) {
    set((state) => {
      const z = nextZ()
      return {
        windows: state.windows.map((w) =>
          w.id === windowId
            ? { ...w, isActive: true, isMinimized: false, zIndex: z }
            : { ...w, isActive: false }
        ),
      }
    })
  },

  minimizeWindow(windowId) {
    set((state) => {
      const remaining = state.windows.filter(
        (w) => w.id !== windowId && !w.isMinimized
      )
      const nextActive =
        remaining.length > 0
          ? [...remaining].sort((a, b) => b.zIndex - a.zIndex)[0].id
          : null

      return {
        windows: state.windows.map((w) => {
          if (w.id === windowId) return { ...w, isMinimized: true, isActive: false }
          if (w.id === nextActive) return { ...w, isActive: true }
          return w
        }),
      }
    })
  },

  maximizeWindow(windowId) {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === windowId ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    }))
  },

  updatePosition(windowId, position) {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === windowId ? { ...w, position } : w
      ),
    }))
  },
}))
