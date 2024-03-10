import { Button, Grid, Paper, Typography } from '@mui/material';

import { useStore } from '@store/store.ts';

import Navigator from '@components/organisms/Navigator/Navigator';
import NavigateLink from '@components/atoms/NavigateLink';

import styles from './Header.module.scss';

export default function Header() {
  const isAuth = useStore((store) => store.isAuth);
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
          <NavigateLink
            linkTo='/auth'
            label={isAuth ? 'Выйти' : 'Войти'}
            className={styles.navigateLink}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
