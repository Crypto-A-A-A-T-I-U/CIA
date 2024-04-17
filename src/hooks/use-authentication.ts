import { create } from 'zustand'

interface UseAuthenticationProps {
  isAuthenticated: boolean
  authenticate: () => void
}

export const useAuthentication = create<UseAuthenticationProps>((set) => ({
  isAuthenticated: false,
  authenticate: () => set({ isAuthenticated: true }),
}))
