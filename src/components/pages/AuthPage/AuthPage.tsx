import { Container } from '@mui/material';
import { AuthComponent } from '@src/components/organisms/index.js';

export default function AuthPage() {
  return (
    <Container
      maxWidth='sm'
      style={{ border: '1px solid black', borderRadius: '8px', padding: '30px 0' }}
    >
      <AuthComponent />
    </Container>
  );
}
