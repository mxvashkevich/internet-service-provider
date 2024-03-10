// @ts-nocheck
import { Autocomplete, Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Finder() {
  const [adresses, setAdresses] = useState(['']);
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const handleBlur = (e) => {
    e.target.value ? setInputText(e.target.value) : setAdresses([]) 
  }

  useEffect(() => {
    console.log('flag')
    if (inputText) {
      const timerId = setTimeout(() => {
        fetch(import.meta.env.VITE_DADATA_ADRESSES, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + import.meta.env.VITE_DADATA_API_KEY,
          },
          body: JSON.stringify({
            query: inputText,
          })
        }) // dadadata ? 
        .then(res => res.json())
        .then(data => {
          const adresses = data.suggestions.map((item) => item.value);
          setAdresses(adresses);
        })
      }, 300)
      return () => clearTimeout(timerId);
    }
  }, [inputText, setInputText])

  return (
    <Box className='ml-10 w-60'>
      <Autocomplete
        options={adresses}
        onInput={handleChange}
        onBlur={handleBlur}
        renderInput={(param) => <TextField {...param} label='Введите свой адрес' />}
      />
    </Box>
  )
}
