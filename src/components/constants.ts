import { RoutesMapper } from './types/types';

export enum Colors {
  blue = 'blue',
  red = 'red',
  green = 'green',
  orange = 'orange',
}

export const colorStyles = {
  blue: '#4285f4',
  red: '#ea4336',
  orange: '#f29900',
  green: '#178038',
  blueDark: '#2f64bb',
  redDark: '#a92e25',
  orangeDark: '#bf7900',
  greenDark: '#11682d',
};

export const cardBenefits = {
  benefits200: [
    'Симметрическая скорость загрузки до 200 Мбит',
    'Включает в себя WiFi - роутер (или используйте свой собственный)',
  ],
  benefits300: [
    'Скорость загрузки до 400 Мбит и выгрузки до 300 Мбит',
    'Включает в себя WiFi - роутер (или используйте свой собственный)',
  ],
  benefits400: [
    'Симметричная загрузки со скоростью до 600 Мбит на совместимом оборудовании',
    'Включает в себя WiFi - роутер (или используйте свой собственный)',
    'Включает в себя до 2 расширителей сети',
  ],
  benefits500: [
    'Симметричная загрузки со скоростью до 800 Мбит на совместимом оборудовании',
    'Включает в себя WiFi - роутер (или используйте свой собственный)',
    'Включает в себя до 2 расширителей сети',
  ],
  benefits15: [
    'Скорость загрузки до 1.5 гигабайт',
    'Поддерживается 99,9% гарантий уровня обслуживания',
    'Поддержка клиентов 24/7',
    'Включен маршрутизатор с возможностью подключения к сети',
    'Включено одно статическое назначение IP',
    'Включена возможность подключения к гостевой сети Wi-Fi',
  ],
  benefits1: [
    'Скорость загрузки до 1 гигабайта',
    'Время безотказной работы 99,9%',
    'Поддержка клиентов 24/7',
    'Включен маршрутизатор',
  ],
};

export const cardDescriptions = {
  description200: 'Быстрый и надежный интернет для вашего дома.',
  description300: 'Подходит для игр нового поколения и потокового вещания.',
  description400: 'Профессионалы ценят скорость.',
  description500: 'Подключайся к облаку с исключительной скоростью.',
};

export const sectionTitles = {
  homeSection1: '',
  homeSection2: `
    Этот интернет - от компании, которая считает, что каждый заслуживает быстрого, надежного и
    недорогого интернета
  `,
  homeSection3: '',
  homeSection4: '',
  homeSection5: '',
};

export const fullBidDescriptions = {
  green: `Выбирайте наши профессиональные тарифы для 
    непревзойденной скорости. С симметричной загрузкой 
    до 600 Мбит на совместимом оборудовании, они 
    обеспечивают эффективное взаимодействие в обе 
    стороны. Вам предоставляется выбор: использовать 
    встроенный WiFi-роутер для удобства или свой 
    собственный. 
    <br>
    <br>
    Дополнительно, тариф включает до 2 
    расширителей сети, обеспечивая превосходное 
    покрытие для вашей профессиональной деятельности.`,
  red: `Наш новый тариф – идеальное решение для геймеров и
    поклонников потокового вещания. С уникальной 
    скоростью загрузки до 400 Мбит и выгрузки до 300 Мбит, 
    он гарантирует плавное взаимодействие с виртуальными 
    мирами и комфортное потоковое воспроизведение 
    контента.
    <br>
    <br>
    В комплекте с тарифом предоставляется мощный 
    WiFi-роутер для стабильного подключения.`,
  orange: `Откройте дверь в мир исключительной скорости с нашим 
    тарифом. С симметричной загрузкой до 800 Мбит на 
    совместимом оборудовании, он предоставляет 
    выдающуюся эффективность для всех ваших 
    онлайн-потребностей. В комплекте — WiFi-роутер для 
    удобства, либо возможность использовать свой 
    собственный. 
    <br>
    <br>
    Тариф включает до 2 расширителей сети, 
    обеспечивая широкий охват и стабильность подключения, 
    создавая идеальные условия для комфортно.`,
  blue: `Получите непревзойденное качество с нашим 
    тарифом - быстрый, надежный интернет до 200 Мбит с 
    симметричной скоростью. В комплекте WiFi-роутер для 
    удобства, либо используйте свой.
    <br>
    <br>
    Наслаждайтесь высокой производительностью, 
    поддерживаемой современными технологиями и
    выбора маршрутизации собственного устройства.`,
};

export const smallBidDescriptions = {
  blue: `Выберите наш бизнес-тариф для выдающегося 
    онлайн-опыта. Скорость загрузки до 1.5 гигабайт 
    обеспечит мгновенный доступ к контенту, 
    необходимому для эффективной работы. Гарантированный 
    уровень обслуживания на уровне 99,9% обеспечивает 
    стабильное и надежное подключение, критическое для
    корпоративных потребностей. 
    <br>
    <br>
    Наша клиентская поддержка доступна 24/7, 
    готовая решать ваши вопросы. В комплекте — 
    маршрутизатор с возможностью подключения к сети, 
    одно статическое назначение IP и удобная гостевая сеть 
    Wi-Fi, созданные для удовлетворения потребностей вашего 
    бизнеса. Переходите на новый уровень корпоративного 
    интернет-подключения с нашим бизнес-тарифом.`,
  red: `Максимизируйте эффективность вашего бизнеса с нашим 
    корпоративным тарифом. Скорость загрузки до 1 гигабайта 
    обеспечит быстрый и надежный доступ к важным данным. 
    Надежность системы на уровне 99,9% гарантирует 
    безотказную работу, что критично для бизнес-процессов. 
    Круглосуточная поддержка клиентов готова ответить на 
    ваши запросы в любое время. 
    <br>
    <br>
    В комплекте — встроенный 
    маршрутизатор, упрощающий процесс подключения. 
    Переходите на новый уровень корпоративной связи с 
    нашим бизнес-тарифом, созданным для удовлетворения 
    потребностей вашего предприятия.`,
  green: '',
  orange: '',
};

export const routesMapper: RoutesMapper = {
  '/': 'Домашний',
  '/business': 'Бизнес',
  '/about': 'Обратная связь',
  '/super-admin': 'Админ панель',
};

export const connectDescs = {
  chat: 'Чат-бот',
  support: 'Позвоните нам по телефону или свяжитесь через электорную почту',
};

export enum Endpoints {
  tariff = 'tariff',
  feed = 'feed',
  contract = 'contract',
  auth = 'auth',
}

export const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+7\d{10}$/,
  password: /^.{4,20}$/,
  fullName: /^(?=.{10,})[А-Яа-яЁё0-9\s\-,.]+$/,
  login: /^[a-zA-Z0-9]{5,20}$/,
};
