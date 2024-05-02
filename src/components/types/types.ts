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
  // [key: string]: string | boolean | string[] | void;
  address: string;
  email: string;
  isAcceptPolicy: boolean;
  orgName?: string;
  files?: FileList;
}

export interface TariffType {
  tariffId: string;
  name: TariffTypes;
}

export interface TariffWithPriceType extends TariffType {
  price?: number;
}

interface UserIdProp {
  fullName: string;
  phone: string;
  type: 'person' | 'law';
  userId: string;
}

interface TariffIdProp {
  tariffId: string;
  name: string;
  price: number;
}

export interface ContractData {
  contactId: string;
  created_at: string;
  data: {
    contactDataId: string;
    data: {
      address: string;
      email: string;
      files: string[]; // массив строк с URL файлов
      isAcceptPolicy: boolean;
    };
  };
  isFinished: boolean;
  passportScan: string[]; // массив объектов, описывающих сканы паспорта (пустой в вашем случае)
  type: string;
  userId: UserIdProp;
  tariffId: TariffIdProp;
}

export type TAuthMeResponse = {
  userId: string;
  isAdmin: boolean;
};

export type TAuthLoginResponse = {
  accessToken: string;
};

export interface jwtBodyLogin {
  id: string;
  email: string;
}
export interface CreateLawContractData {
  email: string;
  orgName: string;
  orgAddress?: string;
  orgToUser?: string;
  price?: number;
  regNumber?: string;
  INN?: string;
  KPP?: string;
  accountNumber?: string;
  BIK?: string;
  phone?: string;
}

export interface CreatePersonContractData {
  address: string;
  email: string;
  fullName?: string;
  passportSeria?: string;
  passportNumber?: string;
  passportByWho?: string;
  passportGetDate?: string;
  passportBirthDate?: string;
  passportRegAddress?: string;
  phone?: string;
}

export interface UpdateContractData {
  contractId: string;
  tariffId?: string;
  data?: CreateLawContractData | CreatePersonContractData;
  isFinished?: boolean;
  type?: string;
}
