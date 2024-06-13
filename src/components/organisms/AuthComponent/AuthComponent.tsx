import { FormEventHandler, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { MyInput } from '@src/components/atoms';
import { AuthFormLogin, AuthFormRegister } from '@src/components/types/types';

import styles from './AuthComponent.module.scss';
import { useAuthStore } from '@src/store/authStore';
import { error } from "console";

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
  const [formError, setFormError] = useState(false);
  const [isFormValidateError, setIsFormValidateError] = useState(false);

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

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (isFormValidateError) return;
    if (Object.values(authForm).every((item) => item === '')) {
      setFormError(true);
    } else {
      setFormError(false);
      Object.keys(authForm).length < 4
        ? authLogin(authForm)
        : authRegister(authForm as AuthFormRegister);
      if (fetchError !== '') {
        setDisplayModal((prev) => !prev);
        clearFetchError();
        clearFetchSuccess();
      }
    }
    if (fetchSuccess !== '') {
      setDisplayModal((prev) => !prev);
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
      {formError && (
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
              key={`${fetchError}1`}
              onDebouncedChange={setAuthForm}
              className={styles.input}
              type='fullName'
              placeholder='Введите ФИО'
              error={isFormValidateError}
              setError={setIsFormValidateError}
            />
            <MyInput
              key={`${fetchError}2`}
              onDebouncedChange={setAuthForm}
              className={styles.input}
              type='phone'
              placeholder='+79001234455'
              error={isFormValidateError}
              setError={setIsFormValidateError}
            />
          </>
        )}
        <MyInput
          key={`${fetchError}3`}
          onDebouncedChange={setAuthForm}
          className={styles.input}
          type='login'
          placeholder='Введите логин'
          error={isFormValidateError}
          setError={setIsFormValidateError}
        />
        <MyInput
          key={`${fetchError}4`}
          onDebouncedChange={setAuthForm}
          className={styles.input}
          type='password'
          placeholder='Введите пароль'
          error={isFormValidateError}
          setError={setIsFormValidateError}
        />
        <Box className={styles.btns}>
          <Button
            variant='text'
            color='primary'
            onClick={() => {
              clearFetchError();
              setFormError(false);
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
