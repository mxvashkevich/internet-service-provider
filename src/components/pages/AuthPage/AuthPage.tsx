import { Container } from '@mui/material';
import { AuthComponent } from '@src/components/organisms/index.ts';

import styles from './AuthPage.module.scss';

export default function AuthPage() {
  return (
    <Container maxWidth='sm' className={styles.container}>
      <AuthComponent />
    </Container>
  );
}
