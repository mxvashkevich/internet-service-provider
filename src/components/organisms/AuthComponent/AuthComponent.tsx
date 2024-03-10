import { FormEventHandler, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import styles from './AuthComponent.module.scss';

export default function AuthComponent() {
  const [isAccountAvailable, setIsAccountAvailable] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    console.log(e);
  };

  return (
    <Box className={styles.container} component={'div'}>
      <Box className={styles.header}>
        <img src='src/assets/logo.png' alt='logo image' className={styles.image} />
        <Typography component='figcaption' className='self-center' fontWeight={700} fontSize='30px'>
          TNGinter
        </Typography>
      </Box>
      <Typography variant='h4'>{!isAccountAvailable ? 'Вход в систему' : 'Регистрация'}</Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        {isAccountAvailable && (
          <>
            <TextField id='outlined-basic' label='Введите ФИО' variant='outlined' />
            <TextField id='outlined-basic' label='Введите номер телефона' variant='outlined' />
          </>
        )}
        <TextField id='outlined-basic' label='Введите логин' variant='outlined' />
        <TextField id='outlined-basic' label='Введите пароль' variant='outlined' />
        <Box className={styles.btns}>
          <Button
            variant='text'
            color='primary'
            onClick={() => setIsAccountAvailable(!isAccountAvailable)}
          >
            {!isAccountAvailable ? 'Зарегистрироваться' : 'У меня есть аккаунт'}
          </Button>
          <Button type='submit' variant='contained' color='primary'>
            Готово
          </Button>
        </Box>
      </form>
    </Box>
  );
}
