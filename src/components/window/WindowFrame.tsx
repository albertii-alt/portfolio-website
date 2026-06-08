import { useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWindowStore } from '../../store/useWindowStore'
import WindowHeader from './WindowHeader'
import type { WindowInstance } from '../../types'

interface WindowFrameProps {
  win: WindowInstance
  children?: React.ReactNode
}

export default function WindowFrame({ win, children }: WindowFrameProps) {
  const { closeWindow, focusWindow, minimizeWindow, maximizeWindow, updatePosition } =
    useWindowStore()

  const dragOffset = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)

  const handleHeaderMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (win.isMaximized) return
      e.preventDefault()
      focusWindow(win.id)
      isDragging.current = true
      dragOffset.current = {
        x: e.clientX - win.position.x,
        y: e.clientY - win.position.y,
      }

      const onMouseMove = (ev: MouseEvent) => {
        if (!isDragging.current) return
        const x = Math.max(0, Math.min(ev.clientX - dragOffset.current.x, window.innerWidth - win.size.width))
        const y = Math.max(0, Math.min(ev.clientY - dragOffset.current.y, window.innerHeight - win.size.height - 80))
        updatePosition(win.id, { x, y })
      }

      const onMouseUp = () => {
        isDragging.current = false
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    },
    [win, focusWindow, updatePosition]
  )

  const style = win.isMaximized
    ? { top: 0, left: 0, width: '100vw', height: 'calc(100vh - 80px)', borderRadius: 0 }
    : {
        top: win.position.y,
        left: win.position.x,
        width: win.size.width,
        height: win.size.height,
      }

  return (
    <AnimatePresence>
      {!win.isMinimized && (
        <motion.div
          key={win.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: win.isMinimized ? 0.2 : 0.25, ease: 'easeOut' }}
          style={{ ...style, zIndex: win.zIndex }}
          className={`absolute flex flex-col rounded-2xl overflow-hidden
            border transition-shadow duration-200
            ${win.isActive
              ? 'border-[#38BDF8]/30 shadow-[0_8px_40px_rgba(0,0,0,0.6)]'
              : 'border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] opacity-90'
            }`}
          onMouseDown={() => focusWindow(win.id)}
        >
          {/* Glassmorphism surface */}
          <div className="absolute inset-0 bg-[rgba(15,23,42,0.80)] backdrop-blur-xl -z-10" />

          <WindowHeader
            title={win.title}
            icon={win.icon}
            isMaximized={win.isMaximized}
            onMouseDown={handleHeaderMouseDown}
            onClose={() => closeWindow(win.id)}
            onMinimize={() => minimizeWindow(win.id)}
            onMaximize={() => maximizeWindow(win.id)}
          />

          {/* Content area */}
          <div className="flex-1 overflow-auto p-4 text-[#CBD5E1]">
            {children ?? (
              <div className="flex items-center justify-center h-full text-[#94A3B8] text-sm">
                {win.title} — content coming in Milestone 5
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
