import { useState, useCallback } from 'react'
import DesktopIcon from './DesktopIcon'
import ContextMenu from './ContextMenu'
import WindowManager from '../window'
import { useWindowStore } from '../../store/useWindowStore'

const ICONS = [
  { label: 'About',        icon: '👤', appId: 'about',        size: { width: 680, height: 480 } },
  { label: 'Projects',     icon: '🗂️', appId: 'projects',     size: { width: 800, height: 560 } },
  { label: 'Skills',       icon: '⚡', appId: 'skills',       size: { width: 640, height: 480 } },
  { label: 'Resume',       icon: '📄', appId: 'resume',       size: { width: 680, height: 520 } },
  { label: 'Contact',      icon: '✉️', appId: 'contact',      size: { width: 560, height: 440 } },
  { label: 'Terminal',     icon: '>_', appId: 'terminal',     size: { width: 640, height: 400 } },
  { label: 'AI Assistant', icon: '✦',  appId: 'ai-assistant', size: { width: 520, height: 560 } },
]

interface MenuState { x: number; y: number }

export default function Desktop() {
  const [menu, setMenu] = useState<MenuState | null>(null)
  const openWindow = useWindowStore((s) => s.openWindow)

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setMenu({ x: e.clientX, y: e.clientY })
  }, [])

  const closeMenu = useCallback(() => setMenu(null), [])

  const handleIconOpen = useCallback(
    (appId: string, label: string, icon: string, size: { width: number; height: number }) => {
      openWindow({ appId, title: label, icon, size })
    },
    [openWindow]
  )

  return (
    <div
      className="relative w-full h-full overflow-hidden select-none"
      onContextMenu={handleContextMenu}
    >
      {/* Wallpaper */}
      <div className="absolute inset-0 bg-[#0F172A]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F1F3D] to-[#0F172A]" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#38BDF8]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#38BDF8]/3 blur-3xl pointer-events-none" />
      </div>

      {/* Desktop Icon Grid */}
      <div className="absolute top-6 left-6 flex flex-col flex-wrap gap-2 max-h-[calc(100vh-96px)] z-10">
        {ICONS.map((item) => (
          <DesktopIcon
            key={item.label}
            label={item.label}
            icon={item.icon}
            onOpen={() => handleIconOpen(item.appId, item.label, item.icon, item.size)}
          />
        ))}
      </div>

      {/* Window Manager */}
      <WindowManager />

      {/* Context Menu */}
      {menu && <ContextMenu x={menu.x} y={menu.y} onClose={closeMenu} />}
    </div>
  )
}
