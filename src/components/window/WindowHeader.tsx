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
  title,
  icon,
  isMaximized,
  onClose,
  onMinimize,
  onMaximize,
  onMouseDown,
}: WindowHeaderProps) {
  return (
    <div
      className="flex items-center justify-between px-4 h-12 shrink-0
        border-b border-white/10 cursor-grab active:cursor-grabbing select-none"
      onMouseDown={onMouseDown}
    >
      {/* Left: icon + title */}
      <div className="flex items-center gap-2.5">
        <span className="text-base leading-none">{icon}</span>
        <span className="text-sm font-medium text-[#CBD5E1]">{title}</span>
      </div>

      {/* Right: window controls */}
      <div
        className="flex items-center gap-1.5"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Minimize */}
        <button
          onClick={onMinimize}
          aria-label="Minimize"
          className="w-3.5 h-3.5 rounded-full bg-[#F59E0B] hover:brightness-125
            transition-all duration-150 flex items-center justify-center group"
        >
          <span className="hidden group-hover:block text-[8px] text-black font-bold leading-none">−</span>
        </button>

        {/* Maximize */}
        <button
          onClick={onMaximize}
          aria-label={isMaximized ? 'Restore' : 'Maximize'}
          className="w-3.5 h-3.5 rounded-full bg-[#22C55E] hover:brightness-125
            transition-all duration-150 flex items-center justify-center group"
        >
          <span className="hidden group-hover:block text-[8px] text-black font-bold leading-none">
            {isMaximized ? '⊡' : '⊞'}
          </span>
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="w-3.5 h-3.5 rounded-full bg-[#EF4444] hover:brightness-125
            transition-all duration-150 flex items-center justify-center group"
        >
          <span className="hidden group-hover:block text-[8px] text-black font-bold leading-none">×</span>
        </button>
      </div>
    </div>
  )
}
