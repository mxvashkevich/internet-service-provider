import { Button, Grid, Paper, Typography } from '@mui/material';

import { useStore } from '@store/store.ts';

import Navigator from '@components/organisms/Navigator/Navigator';
// import NavigateLink from '@components/atoms/NavigateLink';

import styles from './Header.module.scss';
import Modal from '../Modal/Modal';
import { AuthComponent } from '..';

export default function Header() {
  const { isAuth, isModalDisplay, setModalDisplay } = useStore((store) => store);

  const handleAuthClick = () => {
    setModalDisplay(!isModalDisplay);
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
          <Button variant='contained' color='primary' size='small' className={styles.buttonCheck}>
            Проверить доступность
          </Button>
          <Button
            variant='text'
            size='small'
            className={styles.navigateLink}
            onClick={handleAuthClick}
          >
            {isAuth ? 'Выйти' : 'Войти'}
          </Button>
          <Modal>
            <AuthComponent />
          </Modal>
        </Grid>
      </Grid>
    </Paper>
  );
}
