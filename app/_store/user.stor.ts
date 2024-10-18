import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  user: { email: string } | null;
  setUser: (user: { email: string }) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: any) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage', 
    }
  )
);

export default useUserStore;
