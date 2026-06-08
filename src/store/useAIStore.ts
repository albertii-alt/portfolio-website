import { create } from 'zustand'

interface AIStore {}

export const useAIStore = create<AIStore>(() => ({}))
