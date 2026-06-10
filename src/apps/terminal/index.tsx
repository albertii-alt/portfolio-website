import { useState, useRef, useEffect, useCallback } from 'react'
import { useTerminalStore } from '../../store/useTerminalStore'

const MONO = "'JetBrains Mono', 'Fira Code', monospace"

const LINE_STYLE: Record<string, React.CSSProperties> = {
  input:  { color: '#7DD3FC' },
  output: { color: '#CBD5E1' },
  error:  { color: '#F87171' },
  system: { color: '#334155' },
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

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { runCommand(input); setInput(''); return }
    if (e.key === 'ArrowUp') { e.preventDefault(); setInput(navigateHistory('up')); return }
    if (e.key === 'ArrowDown') { e.preventDefault(); setInput(navigateHistory('down')); return }
  }, [input, runCommand, navigateHistory])

  return (
    <div
      className="h-full flex flex-col cursor-text"
      style={{ background: '#080E1C', fontFamily: MONO }}
      onClick={focusInput}
    >
      {/* Output */}
      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-2">
        {lines.map((line) => (
          <div
            key={line.id}
            className="whitespace-pre-wrap break-all"
            style={{
              fontSize: 12.5,
              lineHeight: '20px',
              ...LINE_STYLE[line.type],
            }}
          >
            {line.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div
        className="shrink-0 flex items-center gap-0 px-5 py-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Prompt segments */}
        <span style={{ fontSize: 12.5, color: '#38BDF8', fontFamily: MONO, userSelect: 'none' }}>guest</span>
        <span style={{ fontSize: 12.5, color: '#334155', fontFamily: MONO, userSelect: 'none' }}>@</span>
        <span style={{ fontSize: 12.5, color: '#818CF8', fontFamily: MONO, userSelect: 'none' }}>portfolio</span>
        <span style={{ fontSize: 12.5, color: '#334155', fontFamily: MONO, userSelect: 'none' }}>:~$ </span>

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
          className="terminal-input flex-1 outline-none border-none"
          style={{
            fontFamily: MONO,
            fontSize: 12.5,
            lineHeight: '20px',
            background: 'transparent',
            color: '#E2E8F0',
            caretColor: '#38BDF8',
          }}
        />
      </div>
    </div>
  )
}
