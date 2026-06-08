import { create } from 'zustand'

interface SystemStore {}

export const useSystemStore = create<SystemStore>(() => ({}))
