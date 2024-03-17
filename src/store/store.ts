import { StoreApi, UseBoundStore, create } from 'zustand';

type TRole = 'user' | 'admin';

type TStore = {
  isAuth: boolean;
  role: TRole;
  isModalDisplay: boolean;
  setAuthStatus: (flag: boolean) => void;
  setRole?: (role: TRole) => void;
  setModalDisplay: (flag: boolean) => void;
};

export const useStore: UseBoundStore<StoreApi<TStore>> = create((set) => ({
  isAuth: false,
  role: 'user',
  isModalDisplay: false,
  setAuthStatus: (flag) => set(() => ({ isAuth: flag })),
  setRole: (role) => set(() => ({ role })),
  setModalDisplay: (flag) => set(() => ({ isModalDisplay: flag })),
}));
