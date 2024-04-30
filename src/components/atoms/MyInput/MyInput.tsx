import { ChangeEventHandler, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import { TInputType } from '@src/components/types/types';
import { mapInputTypeForError } from '@src/utils/mapper';
import {
  emailRegex,
  loginRegex,
  nameRegex,
  passwordRegex,
  phoneRegex,
} from '@src/components/constants';

import styles from './MyInput.module.scss';

interface IInputProps<T> {
  type: TInputType;
  placeholder: string;
  name: string;
  className?: string;
  onDebouncedChange?: Dispatch<SetStateAction<T>>;
}

function MyInput<T>({
  type,
  placeholder,
  name,
  className = '',
  onDebouncedChange,
}: IInputProps<T>) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target) return;
    const inputValue = (e.target as HTMLInputElement).value;
    if (inputValue === '') setError(false);
    setValue(inputValue);
  };

  const validateInput = (inputValue: string, regex: RegExp) => {
    !regex.test(inputValue) ? setError(true) : setError(false);
  };

  useEffect(() => {
    if (!value) return;
    const timeoutId = setTimeout(() => {
      switch (type) {
        case 'email':
          validateInput(value, emailRegex);
          break;
        case 'phone':
          validateInput(value, phoneRegex);
          break;
        case 'password':
          validateInput(value, passwordRegex);
          break;
        case 'fullName':
          validateInput(value, nameRegex);
          break;
        case 'login':
          validateInput(value, loginRegex);
          break;
      }
      if (onDebouncedChange) {
        onDebouncedChange((prevState) => ({
          ...prevState,
          [type]: value,
        }));
      }
    }, 800);
    return () => clearTimeout(timeoutId);
  }, [value]);
  return (
    <TextField
      className={className ? `${className}` : styles.input}
      name={name}
      sx={{
        '& .MuiFormHelperText-root': {
          margin: '0 auto',
        },
      }}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      type={type}
      onBlur={(e) => (!e.target.value ? setError(false) : null)}
      error={error}
      helperText={error ? mapInputTypeForError(type) : ''}
    />
  );
}

export default MyInput;
