import { Typography } from '@mui/material';

import styles from './MainLogo.module.scss';

function MainLogo() {
  return (
    <>
      <img src='src/assets/logo.png' alt='logo image' className={styles.image} />
      <Typography component='figcaption' className='self-center' fontWeight={700} fontSize='30px'>
        TNGinter
      </Typography>
    </>
  );
}

export default MainLogo;
