import Desktop from './components/desktop'
import Taskbar from './components/taskbar'

export default function App() {
  return (
    <div className="w-screen h-screen bg-[#0F172A] text-white overflow-hidden relative">
      <Desktop />
      <Taskbar />
    </div>
  )
}
