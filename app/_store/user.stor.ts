import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  user: any;
token:string|null;
  setToken: (token: string|null) => void;
  setUser: (user: any) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token:null,
      setToken: (token: string|null) => set({ token }),
      setUser: (user: any) => set({ user }),
      clearUser: () => set({ user: null,token:null }),
    }),
    {
      name: 'user-storage', 
    }
  )
);

export default useUserStore;
