import {create} from 'zustand';
import { persist } from 'zustand/middleware';
interface IUser {
    id:string;email:string;
    username:string
  }
interface UserState {
  user: IUser|null;
token:string|null;
  setToken: (token: string|null) => void;
  setUser: (user: IUser) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token:null,
      setToken: (token: string|null) => set({ token }),
      setUser: (user: IUser|null) => set({ user }),
      clearUser: () => set({ user: null,token:null }),
    }),
    {
      name: 'user-storage', 
    }
  )
);

export default useUserStore;
