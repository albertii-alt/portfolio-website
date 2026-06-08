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

  return (
    <div className="flex flex-col items-end leading-none">
      <span className="text-sm font-medium text-white">{hh}:{mm}</span>
      <span className="text-[10px] text-[#94A3B8] mt-0.5">
        {time.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
      </span>
    </div>
  )
}

export default function Taskbar() {
  const windows = useWindowStore((s) => s.windows)
  const focusWindow = useWindowStore((s) => s.focusWindow)
  const minimizeWindow = useWindowStore((s) => s.minimizeWindow)

  const handleTaskbarClick = (id: string, isActive: boolean, isMinimized: boolean) => {
    if (isMinimized || !isActive) {
      focusWindow(id)
    } else {
      minimizeWindow(id)
    }
  }

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40
      h-16 px-4 flex items-center gap-4
      rounded-2xl
      bg-[rgba(15,23,42,0.75)] backdrop-blur-xl
      border border-white/10 shadow-2xl
      min-w-[480px] max-w-[80vw]"
    >
      {/* Start Button */}
      <button
        aria-label="Start menu"
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0
          bg-[#38BDF8]/20 hover:bg-[#38BDF8]/30 border border-[#38BDF8]/30
          transition-colors duration-150"
      >
        <span className="text-[#38BDF8] text-base font-bold leading-none">⊞</span>
      </button>

      <div className="w-px h-6 bg-white/10 shrink-0" />

      {/* Running Apps */}
      <div className="flex-1 flex items-center gap-1.5 overflow-x-auto">
        {windows.length === 0 ? (
          <span className="text-[#94A3B8] text-xs mx-auto">No open applications</span>
        ) : (
          windows.map((win) => (
            <button
              key={win.id}
              onClick={() => handleTaskbarClick(win.id, win.isActive, win.isMinimized)}
              aria-label={win.title}
              className={`flex items-center gap-2 px-3 h-9 rounded-xl text-xs font-medium
                border transition-all duration-150 shrink-0 max-w-[140px]
                ${win.isActive && !win.isMinimized
                  ? 'bg-[#38BDF8]/20 border-[#38BDF8]/40 text-white'
                  : 'bg-white/5 border-white/10 text-[#94A3B8] hover:bg-white/10 hover:text-white'
                }`}
            >
              <span className="text-sm leading-none shrink-0">{win.icon}</span>
              <span className="truncate">{win.title}</span>
              {win.isMinimized && (
                <span className="w-1 h-1 rounded-full bg-[#94A3B8] shrink-0" />
              )}
            </button>
          ))
        )}
      </div>

      <div className="w-px h-6 bg-white/10 shrink-0" />

      {/* System Tray + Clock */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="text-[#94A3B8] text-xs">🔊</span>
          <span className="text-[#94A3B8] text-xs">📶</span>
        </div>
        <Clock />
      </div>
    </div>
  )
}
