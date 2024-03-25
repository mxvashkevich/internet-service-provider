import { useState } from 'react';
import { Grid, Paper } from '@mui/material';

import { useStore } from '@src/store/localStore';

import { Modal, AuthComponent, FinderComponent } from '@src/components/organisms/index';
import { Navigator } from '@src/components/molecules/index';
import { MyButton, MainLogo } from '@src/components/atoms/index';

import styles from './Header.module.scss';

export default function Header() {
  const { isAuth } = useStore((store) => store);
  const [isShowModalAuth, setShowModalAuth] = useState<boolean>(false);
  const [isShowModalAdress, setShowModalAdress] = useState<boolean>(false);

  const handleAuthClick = () => {
    setShowModalAuth((prev) => !prev);
  };

  return (
    <Paper elevation={4}>
      <Grid container className='p-2' component='header'>
        <Grid xs={2} item component='figure' className={styles.logoWrapper}>
          <MainLogo />
        </Grid>
        <Grid xs={6} item component='nav' className={styles.navigator}>
          <Navigator />
        </Grid>
        <Grid xs={4} item className={styles.containerButtons}>
          <MyButton
            text='Проверить доступность'
            onClick={() => setShowModalAdress((prev) => !prev)}
          />
          <button type='button' className={styles.navigateLink} onClick={handleAuthClick}>
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
