import { ChangeEventHandler, useEffect, useState } from 'react';
import { TextField, Typography } from '@mui/material';

import Finder from '@src/components/molecules/Finder/Finder';
import MyButton from '@src/components/atoms/MyButton/MyButton';

import styles from './BidComponent.module.scss';

function BidComponent() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target) return;
    const inputValue = (e.target as HTMLInputElement).value;
    if (inputValue === '') setError(false);
    setValue(inputValue);
  };

  const validateEmail = (inputValue: string) => {
    !emailRegex.test(inputValue) ? setError(true) : setError(false);
  };

  useEffect(() => {
    if (value) {
      const timeoutId = setTimeout(() => {
        validateEmail(value);
      }, 400);
      return () => clearTimeout(timeoutId);
    }
  }, [value]);

  return (
    <div className={styles.container}>
      <Typography component='h1'>
        Узнайте, когда TNGinter станет доступен по вашему адресу
      </Typography>

      <div className={styles.textFields}>
        <TextField
          className={styles.firstInput}
          sx={{
            '& .MuiFormHelperText-root': {
              margin: '0 auto',
            },
          }}
          placeholder='Введите адрес электронной почты'
          value={value}
          onChange={handleChange}
          onBlur={(e) => (!e.target.value ? setError(false) : null)}
          error={error}
          helperText={error ? 'Введите корректный адрес электронной почты' : ''}
        />
        <Finder className={styles.secondInput} />
        <MyButton onClick={() => console.log('click')} text='Получать обновления' />
      </div>
      <p>
        Нажимая кнопку “Получать обновления”, вы соглашаетесь получать рекламные электронные письма.
      </p>
    </div>
  );
}

export default BidComponent;
