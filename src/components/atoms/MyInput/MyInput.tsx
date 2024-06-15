import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { TextField } from '@mui/material';

import { mapInputTypeForError } from '@src/utils/mapper';
import { REGEX } from '@src/components/constants';

import styles from './MyInput.module.scss';

interface IInputProps {
  type: keyof typeof REGEX;
  placeholder: string;
  name: string;
  className?: string;
  onDebouncedChange?: Dispatch<SetStateAction<any>>;
}
const MyInput = forwardRef<HTMLInputElement, IInputProps>(function MyInput(props, ref) {
  const [value, setValue] = useState('');
  const [localError, setLocalError] = useState(false);

  const validateInput = (inputValue: string, regex: RegExp) => {
    const test = regex.test(inputValue);
    switch (true) {
      case !test:
        setLocalError(true);
        break;
      case test:
      case inputValue === '' || value === '':
        setLocalError(false);
        break;

      default:
        setLocalError(false);
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target) return;
    const inputValue = (e.target as HTMLInputElement).value;
    validateInput(inputValue, REGEX[props.type]);

    setValue(inputValue);
  };

  useEffect(() => {
    if (value) {
      const timeoutId = setTimeout(() => {
        if (props.onDebouncedChange) {
          props.onDebouncedChange((prevState: any) => ({
            ...prevState,
            [props.type]: value,
          }));
        }
      }, 800);
      return () => clearTimeout(timeoutId);
    }
  }, [value]);

  return (
    <TextField
      {...props}
      className={props.className ? `${props.className}` : styles.input}
      name={props.name}
      sx={{
        '& .MuiFormHelperText-root': {
          margin: '0 auto',
        },
      }}
      inputRef={ref}
      placeholder={props.placeholder}
      value={value}
      onChange={handleChange}
      type={props.type}
      error={localError}
      helperText={localError ? mapInputTypeForError(props.type) : ''}
    />
  );
});

export default MyInput;
