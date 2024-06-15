import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { MyInput } from '@src/components/atoms';
import { AuthFormLogin, AuthFormRegister } from '@src/components/types/types';

import styles from './AuthComponent.module.scss';
import { useAuthStore } from '@src/store/authStore';

interface IAuthComponentProps {
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthComponent({ setDisplayModal }: IAuthComponentProps) {
  const {
    isAdmin,
    authLogin,
    authRegister,
    fetchError,
    clearFetchError,
    fetchSuccess,
    clearFetchSuccess,
  } = useAuthStore((store) => store);

  const navigate = useNavigate();

  const [isLogin, setLogin] = useState(true);
  const [hasFormError, setHasFormError] = useState(false);

  const initialState = isLogin
    ? {
        login: '',
        password: '',
      }
    : {
        name: '',
        phone: '',
        login: '',
        password: '',
      };

  const [authForm, setAuthForm] = useState<AuthFormRegister | AuthFormLogin>(() => initialState);

  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const validateForm = () => {
    const fullName = fullNameRef.current?.value;
    const phone = phoneRef.current?.value;
    const login = loginRef.current?.value;
    const password = passwordRef.current?.value;

    const regExs = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^\+7\d{10}$/,
      password: /^.{4,20}$/,
      fullName: /^(?=.{10,})[А-Яа-яЁё0-9\s\-,.]+$/,
      login: /^[a-zA-Z0-9]{5,20}$/,
    };

    if (isLogin && login && password) {
      switch (true) {
        case Object.values(authForm).every((item) => item === ''):
        case login === '':
        case password === '':
        case !regExs.login.test(login):
        case !regExs.password.test(password):
          setHasFormError(true);
          return false;
        default:
          setHasFormError(false);
          return true;
      }
    } else if (!isLogin && login && password && phone && fullName) {
      switch (true) {
        case Object.values(authForm).every((item) => item === ''):
        case login === '':
        case password === '':
        case !regExs.login.test(login):
        case !regExs.password.test(password):
        case !regExs.fullName.test(fullName):
        case !regExs.phone.test(phone):
          setHasFormError(true);
          return false;
        default:
          setHasFormError(false);
          return true;
      }
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      isLogin ? authLogin(authForm) : authRegister(authForm as AuthFormRegister);

      if (fetchError !== '') {
        clearFetchError();
        clearFetchSuccess();
      }

      if (fetchSuccess !== '') {
        setDisplayModal((prev) => !prev);
        setHasFormError(false);
      }
    }
  };

  useEffect(() => {
    clearFetchError();
  }, [setDisplayModal]);

  useEffect(() => {
    if (!isAdmin) return;
    navigate('/super-admin');
  }, [isAdmin]);

  return (
    <Box className={styles.container} component={'div'}>
      <Box className={styles.header}>
        <img src='src/assets/logo.png' alt='logo image' className={styles.image} />
        <Typography
          component='figcaption'
          className={styles.title}
          fontWeight={700}
          fontSize='24px'
        >
          TNGinter
        </Typography>
      </Box>
      <Typography variant='h4' fontWeight={500} fontSize={'32px'}>
        {isLogin ? 'Вход в систему' : 'Регистрация'}
      </Typography>
      {hasFormError && (
        <p style={{ border: '1px solid tomato', borderRadius: '5px', padding: '5px' }}>
          Форма не заполнена, повторите еще раз
        </p>
      )}
      {fetchError && (
        <p style={{ border: '1px solid tomato', borderRadius: '5px', padding: '5px' }}>
          {fetchError}
        </p>
      )}
      <form onSubmit={handleSubmit} name='auth' className={styles.form}>
        {!isLogin && (
          <>
            <MyInput
              ref={fullNameRef}
              key={`${fetchError}1`}
              onDebouncedChange={setAuthForm}
              className={styles.input}
              type='fullName'
              name='fullName'
              placeholder='Введите ФИО'
            />
            <MyInput
              ref={phoneRef}
              key={`${fetchError}2`}
              onDebouncedChange={setAuthForm}
              className={styles.input}
              type='phone'
              name='phone'
              placeholder='+79001234455'
            />
          </>
        )}
        <MyInput
          ref={loginRef}
          key={`${fetchError}3`}
          onDebouncedChange={setAuthForm}
          className={styles.input}
          type='login'
          name='login'
          placeholder='Введите логин'
        />
        <MyInput
          ref={passwordRef}
          key={`${fetchError}4`}
          onDebouncedChange={setAuthForm}
          className={styles.input}
          type='password'
          name='password'
          placeholder='Введите пароль'
        />
        <Box className={styles.btns}>
          <Button
            variant='text'
            color='primary'
            onClick={() => {
              clearFetchError();
              setHasFormError(false);
              setLogin((prev) => !prev);
            }}
          >
            {isLogin ? 'Зарегистрироваться' : 'У меня есть аккаунт'}
          </Button>
          <Button type='submit' variant='contained' color='primary'>
            Готово
          </Button>
        </Box>
      </form>
    </Box>
  );
}
