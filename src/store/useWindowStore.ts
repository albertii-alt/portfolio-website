import { create } from 'zustand'

interface WindowStore {}

export const useWindowStore = create<WindowStore>(() => ({}))
