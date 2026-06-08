import { useState, useCallback } from 'react'
import DesktopIcon from './DesktopIcon'
import ContextMenu from './ContextMenu'
import WindowManager from '../window'
import { useWindowStore } from '../../store/useWindowStore'
import { APP_REGISTRY } from '../../core/app-registry'

interface MenuState { x: number; y: number }

export default function Desktop() {
  const [menu, setMenu] = useState<MenuState | null>(null)
  const openWindow = useWindowStore((s) => s.openWindow)

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setMenu({ x: e.clientX, y: e.clientY })
  }, [])

  const closeMenu = useCallback(() => setMenu(null), [])

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

      {/* Desktop Icon Grid — generated from registry */}
      <div className="absolute top-6 left-6 flex flex-col flex-wrap gap-2 max-h-[calc(100vh-96px)] z-10">
        {APP_REGISTRY.map((app) => (
          <DesktopIcon
            key={app.id}
            label={app.name}
            icon={app.icon}
            onOpen={() => openWindow(app.id)}
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
