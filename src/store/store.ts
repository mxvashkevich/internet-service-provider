import { create } from 'zustand';

export const useStore = create((set) => ({
  isAuth: false,
  role: 'user',
  setAuthStatus: (flag: boolean) => set(() => ({ isAuth: flag })),
  setRole: (role: string) => set(() => ({ role })),
}));
