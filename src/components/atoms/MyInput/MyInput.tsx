import { ChangeEventHandler, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

import { mapInputTypeForError } from '@src/utils/mapper';
import { REGEX } from '@src/components/constants';

import styles from './MyInput.module.scss';

interface IInputProps<T> {
  type: keyof typeof REGEX;
  placeholder: string;
  name: string;
  className?: string;
  error?: boolean;
  setError?: Dispatch<SetStateAction<boolean>>;
  onDebouncedChange?: Dispatch<SetStateAction<T>>;
}

function MyInput<T>({
  type,
  placeholder,
  name,
  className = '',
  onDebouncedChange,
  setError,
  ...args
}: TextFieldProps & IInputProps<T>) {
  const [value, setValue] = useState('');
  const [localError, setLocalError] = useState(false);

  const validateInput = (inputValue: string, regex: RegExp) => {
    const test = regex.test(inputValue);
    switch (true) {
      case !test && !!setError:
        setLocalError(true);
        setError(true);
        break;
      case !test:
        setLocalError(true);
        break;
      case (inputValue === '' || value === '') && !!setError:
        setError(false);
        setLocalError(false);
        break;
      case inputValue === '' || value === '':
        setLocalError(false);
        break;
      default:
        setLocalError(false);
        setError ? setError(false) : null;
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target) return;
    const inputValue = (e.target as HTMLInputElement).value;

    validateInput(inputValue, REGEX[type]);

    setValue(inputValue);
  };

  useEffect(() => {
    if (value) {
      const timeoutId = setTimeout(() => {
        if (onDebouncedChange) {
          onDebouncedChange((prevState) => ({
            ...prevState,
            [type]: value,
          }));
        }
      }, 800);
      return () => clearTimeout(timeoutId);
    }
  }, [value]);

  useEffect(() => {
    console.log('localerror', localError);
  });
  return (
    <TextField
      {...args}
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
      helperText={localError ? mapInputTypeForError(type) : ''}
    />
  );
}

export default MyInput;
