import { FormEventHandler, Fragment, useEffect } from 'react';

import { Finder, MyButton, MyInput, TitledCheckbox } from '@src/components/atoms';
import { Colors, colorStyles } from '@src/components/constants';

import styles from './SmallBid.module.scss';
import { useFetchStore } from '@src/store/outerStore';
import getTariffId from '@src/utils/getTariffId';
import { FullBidForm } from '@src/components/types/types';

interface ISmallBidProps {
  color: keyof typeof Colors; // TODO может приходить только 2 цвета, а указано 4
  description: string;
  tariffValue: number;
  setModalDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

function SmallBid({ color, description, tariffValue, setModalDisplay }: ISmallBidProps) {
  const { tariffs, createContract, fetchError, fetchSuccess, clearFetchSuccess, clearFetchError } =
    useFetchStore((store) => store);

  const handlerFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData);
    console.log('form>>> ', formJson);
    createContract(formJson as FullBidForm, 'law', getTariffId(tariffs, 'Бизнес', tariffValue));
  };

  const descriptionWithBreaks = description.split('<br>').map((line, index) => (
    <Fragment key={index}>
      {line}
      {index !== description.length - 1 && <br />}
    </Fragment>
  ));

  useEffect(() => {
    if (!fetchSuccess) return;
    alert(fetchSuccess || fetchError);
    setModalDisplay((prevState) => !prevState);
    clearFetchSuccess();
    clearFetchError();
  }, [fetchSuccess]);

  return (
    <div className={styles.container}>
      <div className={`${styles.containerDescription} ${styles[color]}`}>
        <h1 className={styles.title}>О ТАРИФЕ</h1>
        <p className={styles.textDescription}>{descriptionWithBreaks}</p>
      </div>
      <div className={styles.bidForm}>
        <h1 className={styles.title} style={{ color: colorStyles[color] }}>
          ПОЛНАЯ ЗАЯВКА
        </h1>
        <form onSubmit={handlerFormSubmit} className={styles.form}>
          {fetchError && <p>{fetchError}</p>}
          <Finder name='address' placeholder='Введите адрес' />
          <MyInput name='email' type='email' placeholder='Введите адрес электронной почты' />
          <MyInput name='orgName' type='other' placeholder='Введите наименование компании' />
          <TitledCheckbox
            name='isAcceptPolicy'
            title='Я согласен на обработку персональных данных'
          />
          <MyButton type='submit' text='Отправить' color={color} />
        </form>
      </div>
    </div>
  );
}

export default SmallBid;
