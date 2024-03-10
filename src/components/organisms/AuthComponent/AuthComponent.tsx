import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import styles from '@components/organisms/AuthComponent/AuthComponent.module.scss'

export default function AuthComponent() {
  const [isAccountAvailable, setIsAccountAvailable] = useState(false);

  const handleSubmit = (e) => {
    console.log(e)
  }

  return (
    <Box className='container-auth' component={'div'}>
      <Box className='container-auth__header'>
        <img src='src/assets/logo.png' alt='logo image' className='w-14 h-14 self-center' />
        <Typography component='figcaption' className='self-center' fontWeight={700} fontSize='30px'>
          TNGinter
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        {isAccountAvailable &&
        <>
          <TextField id="outlined-basic" label="Введите ФИО" variant="outlined" />
          <TextField id="outlined-basic" label="Введите номер телефона" variant="outlined" />
        </>}
        <TextField id="outlined-basic" label="Введите логин" variant="outlined" />
        <TextField id="outlined-basic" label="Введите пароль" variant="outlined" />
        <Button
          variant="text"
          color='primary'
          onClick={() => setIsAccountAvailable(!isAccountAvailable)}
        >
          {isAccountAvailable ? 'Зарегистрироваться' : 'У меня есть аккаунт'}
        </Button>
        <Button
          type='submit'
          variant="contained"
          color='primary'
        >
          Готово
        </Button>  
      </form>
    </Box>
  );
}