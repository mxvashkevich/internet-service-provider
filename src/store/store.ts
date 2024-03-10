import { StoreApi, UseBoundStore, create } from 'zustand';

type TRole = 'user' | 'admin';

type TStore = {
  isAuth: boolean;
  role: TRole;
  setAuthStatus: (flag: boolean) => void;
  setRole?: (role: TRole) => void;
};

export const useStore: UseBoundStore<StoreApi<TStore>> = create((set) => ({
  isAuth: false,
  role: 'user',
  setAuthStatus: (flag) => set(() => ({ isAuth: flag })),
  setRole: (role) => set(() => ({ role })),
}));
