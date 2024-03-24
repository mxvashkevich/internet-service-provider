import { ChangeEventHandler, useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import styles from './MyInput.module.scss';

type TInputType = 'email' | 'login' | 'password' | 'name' | 'phone' | 'other';

interface IInputProps {
  type: TInputType;
  placeholder: string;
}

function MyInput({ type, placeholder }: IInputProps) {
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
        switch (type) {
          case 'email':
            validateEmail(value);
            break;
        }
      }, 400);
      return () => clearTimeout(timeoutId);
    }
  }, [value]);
  return (
    <TextField
      className={styles.input}
      sx={{
        '& .MuiFormHelperText-root': {
          margin: '0 auto',
        },
      }}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={(e) => (!e.target.value ? setError(false) : null)}
      error={error}
      helperText={error ? 'Введите корректный адрес электронной почты' : ''}
    />
  );
}

export default MyInput;
