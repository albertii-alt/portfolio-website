import { useState, useEffect } from 'react'

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
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40
      h-16 px-4 flex items-center gap-4
      rounded-2xl
      bg-[rgba(15,23,42,0.75)] backdrop-blur-xl
      border border-white/10 shadow-2xl
      min-w-[480px]"
    >
      {/* Start Button */}
      <button
        aria-label="Start menu"
        className="w-9 h-9 rounded-xl flex items-center justify-center
          bg-[#38BDF8]/20 hover:bg-[#38BDF8]/30
          border border-[#38BDF8]/30
          transition-colors duration-150 shrink-0"
      >
        <span className="text-[#38BDF8] text-base font-bold leading-none">⊞</span>
      </button>

      {/* Divider */}
      <div className="w-px h-6 bg-white/10 shrink-0" />

      {/* Running Apps — placeholder for Milestone 3 */}
      <div className="flex-1 flex items-center justify-center gap-2">
        <span className="text-[#94A3B8] text-xs">No open applications</span>
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-white/10 shrink-0" />

      {/* System Tray + Clock */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Tray placeholders */}
        <div className="flex items-center gap-1.5">
          <span className="text-[#94A3B8] text-xs">🔊</span>
          <span className="text-[#94A3B8] text-xs">📶</span>
        </div>
        <Clock />
      </div>
    </div>
  )
}
