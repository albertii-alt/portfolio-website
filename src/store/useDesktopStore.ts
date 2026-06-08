import { create } from 'zustand'

interface DesktopStore {}

export const useDesktopStore = create<DesktopStore>(() => ({}))
