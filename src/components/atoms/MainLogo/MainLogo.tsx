import { Typography } from '@mui/material';

import styles from './MainLogo.module.scss';

interface MainLogoProps {
  grow?: boolean;
}

function MainLogo({ grow }: MainLogoProps) {
  return (
    <div className={styles.container}>
      <img
        src='src/assets/logo.png'
        alt='logo image'
        className={grow ? styles.imageSize : styles.image}
      />
      <Typography component='figcaption' className='self-center' fontWeight={700} fontSize='30px'>
        TNGinter
      </Typography>
    </div>
  );
}

export default MainLogo;
