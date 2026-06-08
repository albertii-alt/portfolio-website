interface DesktopIconProps {
  label: string
  icon: string
}

export default function DesktopIcon({ label, icon }: DesktopIconProps) {
  return (
    <button
      className="flex flex-col items-center gap-1.5 p-2 rounded-xl w-20 group
        hover:bg-white/10 transition-all duration-150 focus:outline-none
        focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
      aria-label={`Open ${label}`}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl
          bg-white/10 border border-white/10 shadow-lg
          group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(56,189,248,0.3)]
          transition-all duration-150"
      >
        {icon}
      </div>
      <span className="text-xs text-[#CBD5E1] group-hover:text-white transition-colors duration-150 text-center leading-tight select-none">
        {label}
      </span>
    </button>
  )
}
