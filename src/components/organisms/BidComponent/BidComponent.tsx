import { Typography } from '@mui/material';

import { MyInput, Finder, MyButton } from '@src/components/atoms/index';

import styles from './BidComponent.module.scss';
import { useStore } from '@src/store/localStore';
import { useRef, useState } from 'react';
import { Modal } from '..';

interface IBidProps {
  title: string;
}

function BidComponent({ title }: IBidProps) {
  const { adresses, setAdresses, finderInput, setFinderInput } = useStore((store) => store);

  const inputRef = useRef(null);
  const [bidValue, setBidValue] = useState('');

  const [keys, setKeys] = useState({ input: adresses[0], finder: finderInput });
  const [isDisplayModal, setDisplayModal] = useState(false);
  const [formError, setFormError] = useState(false);
  const [, setFormValues] = useState({
    email: '',
  });

  const handleClickBtn = () => {
    const regExs = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      address: /^[.\s,А-Яа-яA-Za-z0-9]{10,50}$/,
    };

    const address = bidValue;
    const email = inputRef.current.value;

    console.log('address', address, regExs.address.test(address));
    console.log('email', email, regExs.email.test(email));

    switch (true) {
      case email === '':
      case address === '':
      case !regExs.email.test(email):
      case !regExs.address.test(address):
        setFormError(true);
        break;
      default:
        setAdresses(['Ожидаю ввода адреса...']);
        setFinderInput('');
        setKeys((prev) => ({
          ...prev,
          input: adresses[0],
          finder: finderInput.concat(adresses[0]),
        }));
        setDisplayModal(true);
        setFormError(false);
    }
  };
  return (
    <div className={styles.container}>
      <Typography component='h1'>{title}</Typography>

      {formError && (
        <p style={{ fontSize: '20px', border: '1px solid red', borderRadius: '8px' }}>
          Введите корректные значения!
        </p>
      )}
      <div className={styles.textFields}>
        <MyInput
          ref={inputRef}
          key={keys.input}
          // onDebouncedChange={setFormValues}
          type='email'
          name='email'
          placeholder='Введите адрес электронной почты'
        />
        <Finder
          key={keys.finder}
          onDeboucedChange={setFormValues}
          value={bidValue}
          error={false}
          name='bidFinder'
          onChange={(e) => setBidValue(e.target.value)}
        />
        <MyButton color='blue' onClick={handleClickBtn} text='Получать обновления' />
      </div>
      <p>
        Нажимая кнопку “Получать обновления”, вы соглашаетесь получать рекламные электронные письма.
      </p>
      <Modal isDisplay={isDisplayModal} setDisplay={setDisplayModal}>
        <p style={{ height: '200px', margin: '0 auto', paddingTop: '90px', fontSize: '26px' }}>
          Вы подписались на обновления
        </p>
      </Modal>
    </div>
  );
}

export default BidComponent;
