import { FocusEventHandler, FormEventHandler, useEffect, useState } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';

import styles from './Finder.module.scss';

export default function Finder() {
  const [adresses, setAdresses] = useState<Array<string>>(['']);
  const [inputText, setInputText] = useState<string>('');

  const handleChange: FormEventHandler<HTMLInputElement> = (e) => {
    if (!e.target) return;
    setInputText((e.target as HTMLInputElement).value);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    if (!e.target) return;
    (e.target as HTMLInputElement).value
      ? setInputText((e.target as HTMLInputElement).value)
      : setAdresses([]);
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
          });
      }, 300);
      return () => clearTimeout(timerId);
    }
  }, [inputText, setInputText]);

  return (
    <Box className={styles.containerAutocomplete}>
      <Autocomplete
        options={adresses}
        onInput={handleChange}
        onBlur={handleBlur}
        renderInput={(param) => <TextField {...param} label='Введите свой адрес' />}
      />
    </Box>
  );
}
