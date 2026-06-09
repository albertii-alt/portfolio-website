import { create } from 'zustand'
import { commandRegistry } from '../apps/terminal/commands'

export type LineType = 'input' | 'output' | 'error' | 'system'

export interface TerminalLine {
  id: string
  type: LineType
  content: string
}

interface TerminalStore {
  lines: TerminalLine[]
  history: string[]
  historyIndex: number
  runCommand: (input: string) => void
  clear: () => void
  navigateHistory: (direction: 'up' | 'down') => string
}

function makeLine(type: LineType, content: string): TerminalLine {
  return { id: `${Date.now()}-${Math.random()}`, type, content }
}

const BOOT_LINES: TerminalLine[] = [
  makeLine('system', 'Portfolio OS Terminal v1.0.0'),
  makeLine('system', 'Type "help" to see available commands.'),
  makeLine('system', '─'.repeat(48)),
]

export const useTerminalStore = create<TerminalStore>((set, get) => ({
  lines: BOOT_LINES,
  history: [],
  historyIndex: -1,

  runCommand(input: string) {
    const trimmed = input.trim()
    if (!trimmed) return

    const inputLine = makeLine('input', `guest@portfolio:~$ ${trimmed}`)

    if (trimmed === 'clear') {
      set({ lines: BOOT_LINES, history: [trimmed, ...get().history], historyIndex: -1 })
      return
    }

    const handler = commandRegistry[trimmed.toLowerCase()]
    const outputLines = handler
      ? handler().map((text) => makeLine('output', text))
      : [makeLine('error', `command not found: ${trimmed}. Type "help" for available commands.`)]

    set((state) => ({
      lines: [...state.lines, inputLine, ...outputLines],
      history: [trimmed, ...state.history.filter((h) => h !== trimmed)],
      historyIndex: -1,
    }))
  },

  clear() {
    set({ lines: BOOT_LINES, historyIndex: -1 })
  },

  navigateHistory(direction) {
    const { history, historyIndex } = get()
    if (history.length === 0) return ''

    let next: number
    if (direction === 'up') {
      next = Math.min(historyIndex + 1, history.length - 1)
    } else {
      next = Math.max(historyIndex - 1, -1)
    }

    set({ historyIndex: next })
    return next === -1 ? '' : history[next]
  },
}))
