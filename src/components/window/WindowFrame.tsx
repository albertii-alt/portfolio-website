import { useRef, useCallback, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowStore } from '../../store/useWindowStore'
import { getAppById } from '../../core/app-registry'
import WindowHeader from './WindowHeader'
import type { WindowInstance } from '../../types'

interface WindowFrameProps {
  win: WindowInstance
}

export default function WindowFrame({ win }: WindowFrameProps) {
  const { closeWindow, focusWindow, minimizeWindow, maximizeWindow, updatePosition } = useWindowStore()
  const dragOffset = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)

  const handleHeaderMouseDown = useCallback((e: React.MouseEvent) => {
    if (win.isMaximized) return
    e.preventDefault()
    focusWindow(win.id)
    isDragging.current = true
    dragOffset.current = { x: e.clientX - win.position.x, y: e.clientY - win.position.y }

    const onMove = (ev: MouseEvent) => {
      if (!isDragging.current) return
      updatePosition(win.id, {
        x: Math.max(0, Math.min(ev.clientX - dragOffset.current.x, window.innerWidth - win.size.width)),
        y: Math.max(0, Math.min(ev.clientY - dragOffset.current.y, window.innerHeight - win.size.height - 80)),
      })
    }
    const onUp = () => {
      isDragging.current = false
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }, [win, focusWindow, updatePosition])

  const style = win.isMaximized
    ? { top: 0, left: 0, width: '100vw', height: 'calc(100vh - 80px)', borderRadius: 0 }
    : { top: win.position.y, left: win.position.x, width: win.size.width, height: win.size.height }

  const app = getAppById(win.appId)
  const AppComponent = app?.component

  return (
    <AnimatePresence>
      {!win.isMinimized && (
        <motion.div
          key={win.id}
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            ...style,
            zIndex: win.zIndex,
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: win.isMaximized ? 0 : 16,
            overflow: 'hidden',
            border: win.isActive
              ? '1px solid rgba(56,189,248,0.22)'
              : '1px solid rgba(255,255,255,0.07)',
            boxShadow: win.isActive
              ? '0 24px 64px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(56,189,248,0.1)'
              : '0 8px 32px rgba(0,0,0,0.4)',
            opacity: win.isActive ? 1 : 0.88,
            transition: 'border 200ms ease, box-shadow 200ms ease, opacity 200ms ease',
          }}
          onMouseDown={() => focusWindow(win.id)}
        >
          {/* Glass background */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: 'rgba(11,17,32,0.84)',
              backdropFilter: 'blur(24px)',
            }}
          />
          {/* Subtle top highlight */}
          <div
            className="absolute top-0 left-0 right-0 h-px -z-10"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
          />

          <WindowHeader
            title={win.title}
            icon={win.icon}
            isMaximized={win.isMaximized}
            onMouseDown={handleHeaderMouseDown}
            onClose={() => closeWindow(win.id)}
            onMinimize={() => minimizeWindow(win.id)}
            onMaximize={() => maximizeWindow(win.id)}
          />

          <div className="flex-1 overflow-auto" style={{ color: '#CBD5E1' }}>
            {AppComponent ? (
              <Suspense fallback={
                <div className="flex items-center justify-center h-full text-sm" style={{ color: '#334155' }}>
                  Loading…
                </div>
              }>
                <AppComponent />
              </Suspense>
            ) : (
              <div className="flex items-center justify-center h-full text-sm" style={{ color: '#334155' }}>
                {win.title} — not found in registry
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
