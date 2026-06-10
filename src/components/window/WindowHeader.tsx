import { useState } from 'react'

interface WindowHeaderProps {
  title: string
  icon: string
  isMaximized: boolean
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
  onMouseDown: (e: React.MouseEvent) => void
}

export default function WindowHeader({
  title, icon, isMaximized,
  onClose, onMinimize, onMaximize, onMouseDown,
}: WindowHeaderProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3 px-4 shrink-0 cursor-grab active:cursor-grabbing select-none"
      style={{
        height: 44,
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(255,255,255,0.02)',
      }}
    >
      {/* Traffic lights */}
      <div
        className="flex items-center gap-1.5 shrink-0"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {[
          { color: '#EF4444', hoverColor: '#FF6B6B', symbol: '×', action: onClose,    label: 'Close' },
          { color: '#F59E0B', hoverColor: '#FBBF24', symbol: '−', action: onMinimize, label: 'Minimize' },
          { color: '#22C55E', hoverColor: '#4ADE80', symbol: isMaximized ? '⊡' : '+', action: onMaximize, label: isMaximized ? 'Restore' : 'Maximize' },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={btn.action}
            aria-label={btn.label}
            className="w-3.5 h-3.5 rounded-full flex items-center justify-center
              transition-all duration-150"
            style={{
              background: hovered ? btn.color : 'rgba(255,255,255,0.15)',
              boxShadow: hovered ? `0 0 6px ${btn.color}66` : 'none',
              fontSize: 8,
              fontWeight: 700,
              color: 'rgba(0,0,0,0.7)',
              lineHeight: 1,
            }}
          >
            {hovered ? btn.symbol : null}
          </button>
        ))}
      </div>

      {/* Icon + Title */}
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <span style={{ fontSize: 14, lineHeight: 1 }}>{icon}</span>
        <span
          className="truncate"
          style={{ fontSize: 13, fontWeight: 500, color: 'rgba(203,213,225,0.9)', letterSpacing: '0.01em' }}
        >
          {title}
        </span>
      </div>
    </div>
  )
}
