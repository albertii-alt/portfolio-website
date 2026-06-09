import { useState, useRef, useEffect, useCallback } from 'react'
import { useTerminalStore } from '../../store/useTerminalStore'

const FONT = "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace"

const LINE_COLOR: Record<string, string> = {
  input:  '#38BDF8',
  output: '#CBD5E1',
  error:  '#EF4444',
  system: '#64748B',
}

export default function TerminalApp() {
  const { lines, runCommand, navigateHistory } = useTerminalStore()
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const focusInput = useCallback(() => inputRef.current?.focus(), [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        runCommand(input)
        setInput('')
        return
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setInput(navigateHistory('up'))
        return
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setInput(navigateHistory('down'))
        return
      }
    },
    [input, runCommand, navigateHistory]
  )

  return (
    <div
      className="h-full flex flex-col cursor-text"
      style={{ fontFamily: FONT, backgroundColor: '#0A0F1E' }}
      onClick={focusInput}
    >
      {/* Output area */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2">
        {lines.map((line) => (
          <div
            key={line.id}
            className="text-xs leading-5 whitespace-pre-wrap break-all mb-0.5"
            style={{ color: LINE_COLOR[line.type] ?? '#CBD5E1' }}
          >
            {line.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div
        className="shrink-0 flex items-center gap-2 px-4 py-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Prompt */}
        <span
          className="text-xs shrink-0 select-none"
          style={{ color: '#38BDF8' }}
        >
          guest@portfolio:~$
        </span>

        {/* Input */}
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          aria-label="Terminal input"
          className="terminal-input flex-1 text-xs outline-none border-none"
          style={{
            fontFamily: FONT,
            backgroundColor: 'transparent',
            color: '#F1F5F9',
            caretColor: '#38BDF8',
          }}
          placeholder="type a command…"
        />
      </div>
    </div>
  )
}
