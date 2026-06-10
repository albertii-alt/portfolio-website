import { useState } from 'react'

interface DesktopIconProps {
  label: string
  icon: string
  onOpen: () => void
}

export default function DesktopIcon({ label, icon, onOpen }: DesktopIconProps) {
  const [pressed, setPressed] = useState(false)

  return (
    <button
      onDoubleClick={onOpen}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      aria-label={`Open ${label}`}
      className="flex flex-col items-center gap-1.5 px-2 py-2.5 rounded-xl w-[72px]
        group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60
        transition-colors duration-150 hover:bg-white/[0.06]"
      style={{ transform: pressed ? 'scale(0.93)' : undefined, transition: 'transform 100ms ease, background 150ms ease' }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-[22px]
          border transition-all duration-200"
        style={{
          background: 'rgba(255,255,255,0.06)',
          borderColor: 'rgba(255,255,255,0.08)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}
      >
        {icon}
      </div>
      <span
        className="text-[11px] font-medium text-center leading-tight w-full"
        style={{
          color: 'rgba(241,245,249,0.85)',
          textShadow: '0 1px 3px rgba(0,0,0,0.8)',
        }}
      >
        {label}
      </span>
    </button>
  )
}
