import { AdminCurrentTab, FullBidFormType, TInputType, TariffTypes } from '@src/components/types/types';

export const mapInputTypeForError = (type: TInputType) =>
  ({
    email: 'Введите корректный электронный адрес',
    login: 'Введите корректный логин',
    password: 'Введите корректный пароль',
    fullName: 'Введите корректное имя',
    phone: 'Введите корректный телефон',
    other: 'Введите корректные данные',
  })[type];

export const mapTariffTypes = (type: TariffTypes) =>
  ({
    'Домашний 300': 'person300',
    'Домашний 400': 'person400',
    'Домашний 500': 'person500',
    'Бизнес 1': 'law1',
    'Бизнес 1.5': 'law1.5',
  })[type];

export const mapFullBidForm = (type: FullBidFormType) =>
  ({
    address: 'адрес',
    email: 'электронный адрес',
    isAcceptPolicy: 'согласие на обработку',
    files: 'файлы',
  })[type];

export const mapAdminCurrentTab = (currentTab: AdminCurrentTab) => ({
  'ФД': '',
  'ФП': '',
  'ФК': '',
  'ЮД': '',
  'ЮЗ': '',
})[currentTab];