import { Typography } from '@mui/material';

import { MyInput, Finder, MyButton } from '@src/components/atoms/index';

import styles from './BidComponent.module.scss';
import { useStore } from '@src/store/localStore';
import { useState } from 'react';
import { Modal } from '..';

interface IBidProps {
  title: string;
}

function BidComponent({ title }: IBidProps) {
  const { adresses, setAdresses, finderInput, setFinderInput } = useStore((store) => store);

  const [keys, setKeys] = useState({ input: adresses[0], finder: finderInput });
  const [isDisplayModal, setDisplayModal] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    address: '',
  });

  const handleClickBtn = () => {
    if (Object.keys(formValues).every((item) => item !== '')) {
      setAdresses(['Ожидаю ввода адреса...']);
      setFinderInput('');
      setKeys((prev) => ({ ...prev, input: adresses[0], finder: finderInput.concat(adresses[0]) }));
      setDisplayModal(true);
      setFormError(false);
    } else {
      setFormError(true);
    }
    // TODO sendToCreateMe(jwtToken)
  };

  return (
    <div className={styles.container}>
      <Typography component='h1'>{title}</Typography>

      {formError && (
        <p style={{ fontSize: '20px', border: '1px solid red', borderRadius: '8px' }}>
          Введите значения формы!
        </p>
      )}
      <div className={styles.textFields}>
        <MyInput
          key={keys.input}
          onDebouncedChange={setFormValues}
          type='email'
          placeholder='Введите адрес электронной почты'
        />
        <Finder key={keys.finder} onDeboucedChange={setFormValues} />
        <MyButton color='blue' onClick={handleClickBtn} text='Получать обновления' />
      </div>
      <p>
        Нажимая кнопку “Получать обновления”, вы соглашаетесь получать рекламные электронные письма.
      </p>
      <Modal isDisplay={isDisplayModal} setDisplay={setDisplayModal}>
        {/* TODO проверить должно ли уходить на бек */}
        <p style={{ height: '200px', margin: '0 auto', paddingTop: '90px', fontSize: '26px' }}>
          Вы подписались на обновления
        </p>
      </Modal>
    </div>
  );
}

export default BidComponent;
