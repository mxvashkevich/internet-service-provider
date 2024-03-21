import { ComponentProps, FocusEventHandler, FormEventHandler, useEffect, useState } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';

import styles from './Finder.module.scss';
import { useStore } from '@src/store/store';

type TArgs = Partial<ComponentProps<typeof Autocomplete>>;

export default function Finder(...args: TArgs[]) {
  // TODO застягивается на главной странице
  const [inputText, setInputText] = useState<string>('');
  const { adresses, setAdresses, setFinderInput } = useStore((store) => store);

  const handleChange: FormEventHandler<HTMLInputElement> = (e) => {
    if (!e.target) return;
    setInputText((e.target as HTMLInputElement).value);
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
      }, 300);
      return () => clearTimeout(timerId);
    }
  }, [inputText, setInputText]);

  return (
    <Box className={styles.containerAutocomplete}>
      <Autocomplete
        {...args}
        options={adresses}
        onInput={handleChange}
        onBlur={handleBlur}
        renderInput={(param) => <TextField {...param} placeholder='Введите свой адрес' />}
        sx={{ '& .MuiAutocomplete-popupIndicator': { display: 'none' } }} // отключение стрелки
      />
    </Box>
  );
}
