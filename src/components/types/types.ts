export type TButton = 'contained' | 'text' | 'outlined';

export type RoutesMapper = {
  [key: string]: string;
};

export type TypeContract = 'checked' | 'short' | 'complete' | 'exit';

export type TypePerson = 'person' | 'law';

export type TInputType = 'email' | 'login' | 'password' | 'fullName' | 'phone' | 'other';

export type FullBidFormType = 'address' | 'email' | 'isAcceptPolicy' | 'files';

export type TariffTypes =
  | 'Домашний 300'
  | 'Домашний 400'
  | 'Домашний 500'
  | 'Бизнес 1'
  | 'Бизнес 1.5';

export interface Contract {
  id: number;
  fullName: string;
  tariffType: number;
  phone: string;
  adress: string;
}

export interface AuthFormRegister {
  login: string;
  password: string;
  fullName: string;
  phone: string;
}

export interface AuthFormLogin {
  login: string;
  password: string;
}

export interface FullBidForm {
  [key: string]: string | boolean | string[] | void;
  address: string;
  email: string;
  isAcceptPolicy: boolean;
  files?: string[];
}

export interface TariffType {
  tariffId: string;
  name: TariffTypes;
}

export interface TariffWithPriceType extends TariffType {
  price?: number;
}
