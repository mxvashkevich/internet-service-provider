import {
  Dispatch,
  FocusEventHandler,
  FormEventHandler,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  Box,
  TextField,
  TextFieldVariants,
} from '@mui/material';

import { useStore } from '@src/store/localStore';

import styles from './Finder.module.scss';

interface IFinderProps<T> {
  placeholder?: string;
  variant?: TextFieldVariants;
  name: string;
  onDeboucedChange?: Dispatch<SetStateAction<T>>;
}

interface HandlerChange {
  (
    e: SyntheticEvent<Element, Event>,
    value: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<string> | undefined,
  ): void;
}

export default function Finder<T>({
  placeholder = 'Введите свой адрес',
  variant = 'outlined',
  onDeboucedChange,
  name,
}: IFinderProps<T>) {
  const [inputText, setInputText] = useState<string>('');
  const { adresses, setAdresses, setFinderInput } = useStore((store) => store);

  const handleChangeInput: FormEventHandler<HTMLInputElement> = (e) => {
    if (!e.target) return;
    setInputText((e.target as HTMLInputElement).value);
  };

  const handleChange: HandlerChange = (e, value) => {
    if (!e.target) return;
    setInputText(value ?? '');
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    if (!e.target) return;
    (e.target as HTMLInputElement).value
      ? setFinderInput((e.target as HTMLInputElement).value)
      : setAdresses(['Ожидаю ввода адреса...']);
  };

  useEffect(() => {
    if (inputText) {
      const timerId = setTimeout(() => {
        fetch(import.meta.env.VITE_DADATA_ADRESSES, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Token ' + import.meta.env.VITE_DADATA_API_KEY,
          },
          body: JSON.stringify({
            query: inputText,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            const adresses: Array<string> = data.suggestions.map(
              (item: { value: string }) => item.value,
            );
            setAdresses(adresses);
            setFinderInput(inputText);
          });
        if (onDeboucedChange) {
          onDeboucedChange((prev) => ({ ...prev, address: inputText }));
        }
      }, 300);
      return () => clearTimeout(timerId);
    }
  }, [inputText, setInputText]);

  return (
    <Box className={styles.containerAutocomplete}>
      <Autocomplete
        options={adresses}
        onInput={handleChangeInput}
        onBlur={handleBlur}
        onChange={handleChange}
        renderInput={(param) => (
          <TextField {...param} name={name} placeholder={placeholder} variant={variant} />
        )}
        sx={{ '& .MuiAutocomplete-popupIndicator': { display: 'none' } }} // отключение стрелки
      />
    </Box>
  );
}
