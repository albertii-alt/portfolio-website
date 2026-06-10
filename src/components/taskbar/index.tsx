import { useState, useEffect } from 'react'
import { useWindowStore } from '../../store/useWindowStore'

function Clock() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const hh = time.getHours().toString().padStart(2, '0')
  const mm = time.getMinutes().toString().padStart(2, '0')
  const date = time.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })

  return (
    <div className="flex flex-col items-end select-none" style={{ gap: 1 }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: '#F1F5F9', letterSpacing: '0.02em', lineHeight: 1 }}>
        {hh}:{mm}
      </span>
      <span style={{ fontSize: 10, color: '#64748B', lineHeight: 1 }}>{date}</span>
    </div>
  )
}

export default function Taskbar() {
  const windows = useWindowStore((s) => s.windows)
  const focusWindow = useWindowStore((s) => s.focusWindow)
  const minimizeWindow = useWindowStore((s) => s.minimizeWindow)

  const handleClick = (id: string, isActive: boolean, isMinimized: boolean) => {
    if (isMinimized || !isActive) focusWindow(id)
    else minimizeWindow(id)
  }

  return (
    <div
      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40
        flex items-center h-14 px-3 gap-2"
      style={{
        background: 'rgba(11,17,32,0.80)',
        backdropFilter: 'blur(28px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 18,
        boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.04)',
        minWidth: 420,
        maxWidth: '82vw',
      }}
    >
      {/* Start button */}
      <button
        aria-label="Start menu"
        className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center
          transition-all duration-150"
        style={{
          background: 'rgba(56,189,248,0.14)',
          border: '1px solid rgba(56,189,248,0.22)',
          color: '#38BDF8',
          fontSize: 15,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(56,189,248,0.24)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(56,189,248,0.14)')}
      >
        ⊞
      </button>

      {/* Divider */}
      <div className="w-px h-5 shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }} />

      {/* Running apps */}
      <div className="flex-1 flex items-center gap-1.5 overflow-x-auto min-w-0"
        style={{ scrollbarWidth: 'none' }}>
        {windows.length === 0 ? (
          <span className="mx-auto text-xs" style={{ color: '#334155' }}>
            No open applications
          </span>
        ) : (
          windows.map((win) => {
            const active = win.isActive && !win.isMinimized
            return (
              <button
                key={win.id}
                onClick={() => handleClick(win.id, win.isActive, win.isMinimized)}
                aria-label={win.title}
                className="relative flex items-center gap-1.5 px-2.5 h-8 rounded-xl
                  shrink-0 transition-all duration-150"
                style={{
                  maxWidth: 132,
                  fontSize: 12,
                  fontWeight: 500,
                  background: active ? 'rgba(56,189,248,0.16)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${active ? 'rgba(56,189,248,0.30)' : 'rgba(255,255,255,0.07)'}`,
                  color: active ? '#F1F5F9' : '#64748B',
                }}
              >
                <span className="text-sm leading-none shrink-0">{win.icon}</span>
                <span className="truncate">{win.title}</span>
                {/* Active indicator dot */}
                {active && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: '#38BDF8' }}
                  />
                )}
                {win.isMinimized && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: '#475569' }} />
                )}
              </button>
            )
          })
        )}
      </div>

      {/* Divider */}
      <div className="w-px h-5 shrink-0" style={{ background: 'rgba(255,255,255,0.08)' }} />

      {/* Tray + Clock */}
      <div className="flex items-center gap-2.5 shrink-0">
        <div className="flex items-center gap-1" style={{ color: '#334155', fontSize: 13 }}>
          <span>🔊</span>
          <span>📶</span>
        </div>
        <Clock />
      </div>
    </div>
  )
}
