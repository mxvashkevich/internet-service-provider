import { useEffect, useRef, useState } from 'react';
import { Grid, Paper } from '@mui/material';

import { useAuthStore } from '@src/store/authStore';

import { Modal, AuthComponent, FinderComponent } from '@src/components/organisms/index';
import { Navigator } from '@src/components/molecules/index';
import { MyButton, MainLogo } from '@src/components/atoms/index';

import styles from './Header.module.scss';

export default function Header() {
  const { isAuth, setAuthStatus } = useAuthStore((store) => store);
  const [isShowModalAuth, setShowModalAuth] = useState<boolean>(false);
  const [isShowModalAdress, setShowModalAdress] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleAuthClick = () => {
    if (!buttonRef.current) return;
    if (
      buttonRef.current.textContent === 'Выйти' &&
      window.confirm('Вы действительно хотите выйти?')
    ) {
      localStorage.removeItem('accessToken');
      setAuthStatus(false);
    }
    if (buttonRef.current.textContent === 'Войти') {
      setShowModalAuth((prev) => !prev);
    }
  };

  useEffect(() => {
    setShowModalAuth(false);
  }, [isAuth]);

  return (
    <Paper elevation={4}>
      <Grid container className='p-2' component='header'>
        <Grid xs={3} item component='figure' className={styles.logoWrapper}>
          <MainLogo />
        </Grid>
        <Grid xs={5} item component='nav' className={styles.navigator}>
          <Navigator />
        </Grid>
        <Grid xs={4} item className={styles.containerButtons}>
          <MyButton
            text='Проверить доступность'
            onClick={() => setShowModalAdress((prev) => !prev)}
          />
          <button
            ref={buttonRef}
            type='button'
            className={styles.navigateLink}
            onClick={handleAuthClick}
          >
            {isAuth ? 'Выйти' : 'Войти'}
          </button>
          <Modal isDisplay={isShowModalAuth} setDisplay={setShowModalAuth}>
            <AuthComponent setDisplayModal={setShowModalAuth} />
          </Modal>
          <Modal isDisplay={isShowModalAdress} setDisplay={setShowModalAdress}>
            <FinderComponent />
          </Modal>
        </Grid>
      </Grid>
    </Paper>
  );
}
