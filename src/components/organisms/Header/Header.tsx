import { useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';

import { useStore } from '@store/store.ts';

import { AuthComponent } from '..';
import Modal from '../Modal/Modal';
import Navigator from '@components/organisms/Navigator/Navigator';
// import NavigateLink from '@components/atoms/NavigateLink';

import styles from './Header.module.scss';
import MyButton from '@src/components/atoms/MyButton/MyButton';
import FinderComponent from '../FinderComponent/FinderComponent';

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
        <Grid xs={2} item component='figure' className={styles.figure}>
          <img src='src/assets/logo.png' alt='logo image' className={styles.image} />
          <Typography
            component='figcaption'
            className='self-center'
            fontWeight={700}
            fontSize='30px'
          >
            TNGinter
          </Typography>
        </Grid>
        <Grid xs={6} item component='nav' className={styles.navigator}>
          <Navigator />
        </Grid>
        <Grid xs={4} item className={styles.containerButtons}>
          <MyButton
            text='Проверить доступность'
            onClick={() => setShowModalAdress((prev) => !prev)}
          />
          <Button
            variant='text'
            size='small'
            className={styles.navigateLink}
            onClick={handleAuthClick}
          >
            {isAuth ? 'Выйти' : 'Войти'}
          </Button>
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
