import { Typography } from '@mui/material';

import { MyInput, Finder, MyButton } from '@src/components/atoms/index';

import styles from './BidComponent.module.scss';
import { useStore } from '@src/store/localStore';
import { useState } from 'react';

interface IBidProps {
  title: string;
}

function BidComponent({ title }: IBidProps) {
  const { adresses, setAdresses, finderInput, setFinderInput } = useStore((store) => store);
  const [keys, setKeys] = useState({ input: adresses[0], finder: finderInput });

  const handleClickBtn = () => {
    setAdresses(['Ожидаю ввода адреса...']);
    setFinderInput('');
    setKeys((prev) => ({ ...prev, input: adresses[0], finder: finderInput.concat(adresses[0]) }));
  };

  return (
    <div className={styles.container}>
      <Typography component='h1'>{title}</Typography>

      <div className={styles.textFields}>
        <MyInput key={keys.input} type='email' placeholder='Введите адрес электронной почты' />
        <Finder key={keys.finder} />
        <MyButton color='blue' onClick={handleClickBtn} text='Получать обновления' />
      </div>
      <p>
        Нажимая кнопку “Получать обновления”, вы соглашаетесь получать рекламные электронные письма.
      </p>
    </div>
  );
}

export default BidComponent;
