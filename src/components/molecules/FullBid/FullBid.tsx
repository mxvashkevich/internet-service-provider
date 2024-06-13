import {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  Fragment,
  SetStateAction,
  useState,
} from 'react';
import { Button } from '@mui/material';

import { Finder, MyButton, MyInput, TitledCheckbox } from '@src/components/atoms';
import { Colors, colorStyles } from '@src/components/constants';

import styles from './FullBid.module.scss';
import { useFetchStore } from '@src/store/outerStore';
import getTariffId from '@src/utils/getTariffId';
import validateFormEntries from '@src/utils/validateFormEntries';

interface IFullBidProps {
  color: keyof typeof Colors;
  description: string;
  setModalDisplay: Dispatch<SetStateAction<boolean>>;
  tariffValue: number;
  isAdminCreate?: boolean;
}

function FullBid({
  color,
  description,
  setModalDisplay,
  tariffValue,
  isAdminCreate = false,
}: IFullBidProps) {
  const { createContract } = useFetchStore((store) => store);
  const { createFeed, tariffs } = useFetchStore((state) => state);

  const [files, setFiles] = useState<FileList | undefined>();
  const [error, setError] = useState<string>('');

  const isErrorFile = error === 'Форма не заполнена. Файлы не прикреплены.';
  const isErrorForm = error === 'Форма не заполнена';

  const handlerFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (typeof files === 'undefined') {
      setError('Форма не заполнена. Файлы не прикреплены.');
      return;
    }

    const formData = new FormData();
    const formDataEntries = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formDataEntries);

    formValues.isAcceptPolicy = Boolean(formValues.isAcceptPolicy) as unknown as FormDataEntryValue;

    formData.append('data', JSON.stringify(formValues));
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    if (!validateFormEntries(formValues, setError)) {
      createContract(formData, 'person', getTariffId(tariffs, 'Домашний', tariffValue));
      setModalDisplay((prev) => !prev);
    }
  };

  const onImageChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setFiles(target.files);
  };

  const descriptionWithBreaks = description.split('<br>').map((line, index) => (
    <Fragment key={index}>
      {line}
      {index !== description.length - 1 && <br />}
    </Fragment>
  ));

  const handleFeedClick = () => {
    createFeed();
  };

  return (
    <div className={`${styles.fullBidWrapper} ${isAdminCreate ? styles.isAdminCreate : ''}`}>
      {!isAdminCreate && (
        <div className={`${styles.bidDescription} ${styles[color]}`}>
          <h1 className={styles.title}>О ТАРИФЕ</h1>
          <p className={styles.textDescription}>{descriptionWithBreaks}</p>
          <Button
            onClick={handleFeedClick}
            variant='contained'
            type='button'
            className={styles.btn}
          >
            Предзаявка
          </Button>
        </div>
      )}

      <div className={styles.bidForm}>
        <h1 className={styles.title} style={{ color: colorStyles[color] }}>
          ПОЛНАЯ ЗАЯВКА
        </h1>
        {error && (
          <p style={{ border: '1px solid tomato', borderRadius: '10px', textAlign: 'center' }}>
            {error}
          </p>
        )}
        <form onSubmit={handlerFormSubmit} className={styles.form}>
          <Finder
            name='address'
            error={isErrorForm}
            onDeboucedChange={() => {}}
            placeholder='Введите адрес'
          />
          <MyInput
            error={isErrorForm}
            name='email'
            onDebouncedChange={() => {}}
            type='email'
            placeholder='Введите адрес электронной почты'
          />
          <div className={`${styles.imgWrapper} ${isErrorFile ? styles.error : ''}`}>
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
              <span className={styles.imageCount}>{files ? files.length : 0}</span>
            </label>
            {!files && <p>Прикрепите фотографии паспорта (главная страница и прописка)</p>}
            {files && files.length && (
              <div className='flex flex-row gap-5 justify-center'>
                <img src={URL.createObjectURL(files[0])} alt='dummy' width='100' height='100' />
                <img src={URL.createObjectURL(files[1])} alt='dummy' width='100' height='100' />
              </div>
            )}
          </div>

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

export default FullBid;
