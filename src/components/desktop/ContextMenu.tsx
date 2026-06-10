import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useWindowStore } from '../../store/useWindowStore'

interface ContextMenuProps {
  x: number
  y: number
  onClose: () => void
}

const ITEMS = [
  { label: 'Refresh',          icon: '↺',  action: () => window.location.reload(),        id: 'refresh' },
  { label: 'Open AI Assistant',icon: '✦',  action: 'ai-assistant',                        id: 'ai' },
  { label: 'Open Terminal',    icon: '>_', action: 'terminal',                            id: 'term' },
]

export default function ContextMenu({ x, y, onClose }: ContextMenuProps) {
  const ref = useRef<HTMLDivElement>(null)
  const openWindow = useWindowStore((s) => s.openWindow)

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [onClose])

  // Clamp to viewport
  const safeX = Math.min(x, window.innerWidth - 192)
  const safeY = Math.min(y, window.innerHeight - 140)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96, y: -4 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.12, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: safeY,
        left: safeX,
        zIndex: 9999,
        minWidth: 192,
        background: 'rgba(11,17,32,0.92)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: 12,
        boxShadow: '0 16px 48px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.04)',
        padding: '4px 0',
        overflow: 'hidden',
      }}
    >
      {ITEMS.map((item, i) => (
        <button
          key={item.id}
          onClick={() => {
            if (typeof item.action === 'string') openWindow(item.action)
            else item.action()
            onClose()
          }}
          className="w-full flex items-center gap-3 px-3 py-2 text-left
            transition-colors duration-100 group"
          style={{ color: 'rgba(203,213,225,0.9)', fontSize: 13 }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          <span className="w-5 text-center text-xs" style={{ color: '#38BDF8' }}>{item.icon}</span>
          {item.label}
        </button>
      ))}
    </motion.div>
  )
}
