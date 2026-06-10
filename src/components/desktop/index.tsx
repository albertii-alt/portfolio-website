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
      {/* Wallpaper layers */}
      <div className="absolute inset-0" style={{ background: 'var(--bg)' }}>
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse, #38BDF8 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse, #818CF8 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(ellipse, #38BDF8 0%, transparent 70%)' }} />
      </div>

      {/* Desktop Icon Grid */}
      <div className="absolute top-8 left-6 flex flex-col gap-1 z-10">
        {APP_REGISTRY.map((app) => (
          <DesktopIcon
            key={app.id}
            label={app.name}
            icon={app.icon}
            onOpen={() => openWindow(app.id)}
          />
        ))}
      </div>

      <WindowManager />

      {menu && <ContextMenu x={menu.x} y={menu.y} onClose={closeMenu} />}
    </div>
  )
}
