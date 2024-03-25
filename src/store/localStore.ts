import { StoreApi, UseBoundStore, create } from 'zustand';

type TRole = 'user' | 'admin';

type TStore = {
  isAuth: boolean;
  role: TRole;
  adresses: string[];
  finderInput: string;
  setAuthStatus: (flag: boolean) => void;
  setRole?: (role: TRole) => void;
  setAdresses: (adresses: string[]) => void;
  setFinderInput: (text: string) => void;
};

export const useStore: UseBoundStore<StoreApi<TStore>> = create((set) => ({
  isAuth: false,
  role: 'user',
  adresses: ['Ожидаю ввода адреса...'],
  finderInput: '',
  setAuthStatus: (flag) => set(() => ({ isAuth: flag })),
  setRole: (role) => set(() => ({ role })),
  setAdresses: (adresses) => set(() => ({ adresses })),
  setFinderInput: (text) => set(() => ({ finderInput: text })),
}));
