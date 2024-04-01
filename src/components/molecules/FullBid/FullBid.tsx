import {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Button } from '@mui/material';

import { Finder, MyButton, MyInput, TitledCheckbox } from '@src/components/atoms';
import { Colors, colorStyles } from '@src/components/constants';
import { FullBidForm, FullBidFormType } from '@src/components/types/types';
import { mapFullBidForm } from '@src/utils/mapper';

import styles from './FullBid.module.scss';
import { useFetchStore } from '@src/store/outerStore';

interface IFullBidProps {
  color: keyof typeof Colors;
  description: string;
  setModalDisplay: Dispatch<SetStateAction<boolean>>;
  tariffId: string;
}

function FullBid({ color, description, setModalDisplay, tariffId }: IFullBidProps) {
  // TODO переиспользовать
  const { createContract: fetchContractData } = useFetchStore((store) => store);

  const [trigger, setTrigger] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<string>('');
  const [isChecked, setChecked] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FullBidForm>(() => ({
    address: '',
    email: '',
    isAcceptPolicy: !isChecked,
    files: [],
  }));

  const handlerFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (formErrors.length) {
      setTrigger((prevState) => !prevState);
      return;
    } else {
      console.log('sended for server', formValues);
      fetchContractData(formValues, 'person', tariffId);
      setModalDisplay((prevState) => !prevState);
    }
  };

  const onImageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormErrors('');
    const files = event.target.files;
    if (files) {
      const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
      setFormValues((prevState) => ({ ...prevState, files: imagesArray }));
    }
  };

  useEffect(() => {
    setFormErrors('');
    Object.keys(formValues).forEach((item: string) => {
      if (
        !formValues[item] ||
        (Array.isArray(formValues[item]) && !(formValues[item] as string[]).length)
      ) {
        setFormErrors((prevState) =>
          prevState.concat(`${mapFullBidForm(item as FullBidFormType)} `),
        );
      }
    });
  }, [trigger]);

  const descriptionWithBreaks = description.split('<br>').map((line, index) => (
    <Fragment key={index}>
      {line}
      {index !== description.length - 1 && <br />}
    </Fragment>
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
          {Boolean(formErrors.length) && trigger && (
            <p style={{ border: '1px solid tomato', borderRadius: '5px', padding: '5px' }}>
              Незаполненные поля: {formErrors}
            </p>
          )}
          <Finder onDeboucedChange={setFormValues} placeholder='Введите адрес' />
          <MyInput
            onDebouncedChange={setFormValues}
            type='email'
            placeholder='Введите адрес электронной почты'
          />
          <div className={styles.imgWrapper}>
            <input
              type='file'
              onChange={onImageChange}
              accept='image/*'
              style={{ display: 'none' }}
              id='imageInput'
              multiple
            />
            <label htmlFor='imageInput' className={styles.label}>
              <img src={'src/assets/img-icon.png'} alt='select-file-logo' className={styles.img} />
              <span className={styles.imageCount}>
                {formValues.files ? formValues.files.length : 0}
              </span>
            </label>
            <p>Прикрепите фотографии паспорта (главная страница и прописка)</p>
          </div>
          <TitledCheckbox
            title='Я согласен на обработку персональных данных'
            checked={isChecked}
            onClick={setChecked}
          />
          <MyButton type='submit' text='Отправить' color={color} />
        </form>
      </div>
    </div>
  );
}

export default FullBid;
