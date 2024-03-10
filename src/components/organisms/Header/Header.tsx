import { Button, Grid, Paper, Typography } from '@mui/material';

import Navigator from '../Navigator/Navigator.js';
import NavigateLink from '../../atoms/NavigateLink.js';
import { useStore } from '@store/store.js';

export default function Header() {
  const isAuth = useStore((store) => store.isAuth);
  return (
    <Paper elevation={4}>
      <Grid container className='p-2' component='header'>
        <Grid xs={2} item component='figure' className='flex'>
          <img src='src/assets/logo.png' alt='logo image' className='w-14 h-14 self-center' />
          <Typography
            component='figcaption'
            className='self-center'
            fontWeight={700}
            fontSize='30px'
          >
            TNGinter
          </Typography>
        </Grid>
        <Grid xs={6} item component='nav' className='flex gap-4 self-center'>
          <Navigator />
        </Grid>
        <Grid xs={4} item className='flex justify-around'>
          <Button
            variant='contained'
            color='primary'
            size='small'
            className='mr-3'
            sx={{
              borderRadius: '27px',
              textTransform: 'none',
              fontSize: '18px',
              padding: '0 18px',
            }}
          >
            Проверить доступность
          </Button>
          <NavigateLink linkTo='/auth' label={isAuth ? 'Выйти' : 'Выйти'} className='self-center' />
        </Grid>
      </Grid>
    </Paper>
  );
}
