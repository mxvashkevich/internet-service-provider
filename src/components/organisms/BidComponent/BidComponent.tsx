import { Typography } from '@mui/material';

import { MyInput, Finder, MyButton } from '@src/components/atoms/index';

import styles from './BidComponent.module.scss';

interface IBidProps {
  title: string;
}

function BidComponent({ title }: IBidProps) {
  return (
    <div className={styles.container}>
      <Typography component='h1'>{title}</Typography>

      <div className={styles.textFields}>
        <MyInput type='email' placeholder='Введите адрес электронной почты' />
        <Finder />
        <MyButton color='blue' onClick={() => console.log('click')} text='Получать обновления' />
      </div>
      <p>
        Нажимая кнопку “Получать обновления”, вы соглашаетесь получать рекламные электронные письма.
      </p>
    </div>
  );
}

export default BidComponent;
