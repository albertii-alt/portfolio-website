import { useEffect, useRef } from 'react'
import { useWindowStore } from '../../store/useWindowStore'

interface ContextMenuProps {
  x: number
  y: number
  onClose: () => void
}

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

  const items = [
    {
      label: 'Refresh',
      icon: '↺',
      action: () => window.location.reload(),
    },
    {
      label: 'Open AI Assistant',
      icon: '✦',
      action: () => openWindow('ai-assistant'),
    },
    {
      label: 'Open Terminal',
      icon: '>_',
      action: () => openWindow('terminal'),
    },
  ]

  return (
    <div
      ref={ref}
      style={{ top: y, left: x }}
      className="fixed z-50 min-w-44 rounded-xl overflow-hidden
        bg-[rgba(15,23,42,0.85)] backdrop-blur-xl
        border border-white/10 shadow-2xl"
    >
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => { item.action(); onClose() }}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#CBD5E1]
            hover:bg-white/10 hover:text-white transition-colors duration-150 text-left"
        >
          <span className="text-[#38BDF8] w-4 text-center">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </div>
  )
}
