import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <Box className={styles.container}>
      <Typography>
        © 2023 TNGinter |347904 Россия, Ростовкая область, Таганрог, улица Петровская 109А
      </Typography>
    </Box>
  );
}
