import Desktop from './components/desktop'
import Taskbar from './components/taskbar'

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ background: 'var(--bg)', color: 'var(--text-1)' }}>
      <Desktop />
      <Taskbar />
    </div>
  )
}
