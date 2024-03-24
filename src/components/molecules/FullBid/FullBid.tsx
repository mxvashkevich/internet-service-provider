import React, { FormEventHandler } from 'react';

import { Button } from '@mui/material';
import { Finder, MyButton, MyInput, TitledCheckbox } from '@src/components/atoms';
import { Colors, colorStyles } from '@src/components/constants';

import styles from './FullBid.module.scss';

interface IFullBidProps {
  color: keyof typeof Colors;
  description: string;
}

function FullBid({ color, description }: IFullBidProps) {
  // TODO переиспользовать
  const handlerFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const descriptionWithBreaks = description.split('<br>').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== description.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className={styles.fullBidWrapper}>
      <div className={`${styles.bidDescription} ${styles[color]}`}>
        <h1 className={styles.title}>О ТАРИФЕ</h1>
        <p className={styles.textDescription}>{descriptionWithBreaks}</p>
        <Button onClick={() => {}} variant='contained' type='button' className={styles.btn}>
          Предзаявка
        </Button>
      </div>
      <div className={styles.bidForm}>
        <h1 className={styles.title} style={{ color: colorStyles[color] }}>
          ПОЛНАЯ ЗАЯВКА
        </h1>
        <form onSubmit={handlerFormSubmit} className={styles.form}>
          <Finder placeholder='Введите адрес' />
          <MyInput type='email' placeholder='Введите адрес электронной почты' />
          <div className={styles.imgWrapper}>
            <img alt='img-logo' src='src/assets/img-icon.png' className={styles.img} />
            <p>Прикрепите фотографии паспорта (главная страница и прописка)</p>
          </div>
          <TitledCheckbox title='Я согласен на обработку персональных данных' />
          <MyButton
            type='submit'
            text='Отправить'
            color={color}
            onClick={() => {
              console.log('clicked');
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default FullBid;
