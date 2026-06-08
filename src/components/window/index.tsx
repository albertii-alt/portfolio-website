import { useWindowStore } from '../../store/useWindowStore'
import WindowFrame from './WindowFrame'

export default function WindowManager() {
  const windows = useWindowStore((s) => s.windows)
  const sorted = [...windows].sort((a, b) => a.zIndex - b.zIndex)

  return (
    <>
      {sorted.map((win) => (
        <WindowFrame key={win.id} win={win} />
      ))}
    </>
  )
}
