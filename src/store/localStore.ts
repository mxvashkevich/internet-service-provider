import { StoreApi, UseBoundStore, create } from 'zustand';
import { TariffTypes } from '@src/components/types/types';

type TRole = 'user' | 'admin';

type TStore = {
  role: TRole;
  adresses: string[];
  finderInput: string;
  currentFilter: TariffTypes | '';
  setRole?: (role: TRole) => void;
  setAdresses: (adresses: string[]) => void;
  setFinderInput: (text: string) => void;
  setCurrentFilter: (type: TariffTypes) => void;
};

export const useStore: UseBoundStore<StoreApi<TStore>> = create((set) => ({
  role: 'user',
  adresses: ['Ожидаю ввода адреса...'],
  finderInput: '',
  currentFilter: '',
  setRole: (role) => set(() => ({ role })),
  setAdresses: (adresses) => set(() => ({ adresses })),
  setFinderInput: (text) => set(() => ({ finderInput: text })),
  setCurrentFilter: (type) => set(() => ({ currentFilter: type })),
}));
