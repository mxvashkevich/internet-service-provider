import {
  ContractData,
  CreateLawContractData,
  CreatePersonContractData,
} from '@src/components/types/types';

import styles from './FormChangeContract.module.scss';

interface ContractChangeItemProps {
  contract: ContractData;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

function FormChangeContract({ contract, onSubmit = () => {} }: ContractChangeItemProps) {
  const { data, userId, type, isFinished } = contract;
  const isPerson = type === 'person';
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {isPerson ? (
        <>
          <h1>{'Физическое лицо'}</h1>
          <input type='text' name='fullName' defaultValue={userId.fullName} />
          <input
            type='text'
            name='address'
            defaultValue={(data.data as CreatePersonContractData).address}
          />
          <input
            type='text'
            name='email'
            defaultValue={(data.data as CreatePersonContractData).email}
          />
          <input type='text' name='phone' defaultValue={userId.phone} />
          <input
            type='text'
            name='passportSeria'
            placeholder='Серия паспорта'
            defaultValue={(data.data as CreatePersonContractData).passportSeria}
          />
          <input
            type='text'
            name='passportNumber'
            placeholder='Номер паспорта'
            defaultValue={(data.data as CreatePersonContractData).passportNumber}
          />
          <input
            type='text'
            name='passportByWho'
            placeholder='Кем выдан паспорт'
            defaultValue={(data.data as CreatePersonContractData).passportByWho}
          />
          <input
            type='text'
            name='passportGetDate'
            placeholder='Дата выдачи паспорта'
            defaultValue={(data.data as CreatePersonContractData).passportGetDate}
          />
          <input
            type='text'
            name='passportBirthDate'
            placeholder='Дата рождения'
            defaultValue={(data.data as CreatePersonContractData).passportBirthDate}
          />
          <input
            type='text'
            name='passportRegAddress'
            placeholder='Адрес регистрации'
            defaultValue={(data.data as CreatePersonContractData).passportRegAddress}
          />
          <div>
            <span>Закончено ли заполнение заявки?</span>
            <input name='isFinished' type='checkbox' defaultChecked={isFinished} />
          </div>
          <button type='submit'>Редактировать</button>
        </>
      ) : (
        <>
          <h1>{'Юридическое лицо'}</h1>
          <input
            type='text'
            name='phone'
            placeholder='Контантный номер телефона'
            defaultValue={userId.phone}
          />
          <input
            type='text'
            name='email'
            placeholder='email'
            defaultValue={(data.data as CreateLawContractData).email}
          />
          <input
            type='text'
            name='orgAddress'
            placeholder='Адрес организации'
            defaultValue={(data.data as CreateLawContractData).orgAddress}
          />
          <input type='text' name='orgtoUser' defaultValue={userId.fullName} />
          <input
            type='text'
            name='price'
            placeholder='Цена'
            defaultValue={(data.data as CreateLawContractData).price}
          />
          <input
            type='text'
            name='regNumber'
            placeholder='Регистрационный номер'
            defaultValue={(data.data as CreateLawContractData).regNumber}
          />
          <input
            type='text'
            name='INN'
            placeholder='ИНН'
            defaultValue={(data.data as CreateLawContractData).INN}
          />
          <input
            type='text'
            name='KPP'
            placeholder='КПП'
            defaultValue={(data.data as CreateLawContractData).KPP}
          />
          <input
            type='text'
            name='accountNumber'
            placeholder='Номер аккаунта'
            defaultValue={(data.data as CreateLawContractData).accountNumber}
          />
          <input
            type='text'
            name='BIK'
            placeholder='БИК'
            defaultValue={(data.data as CreateLawContractData).BIK}
          />
          <div>
            <span>Закончено ли заполнение заявки?</span>
            <input name='isFinished' type='checkbox' defaultChecked={isFinished} />
          </div>
          <button type='submit'>Редактировать</button>
        </>
      )}
    </form>
  );
}

export default FormChangeContract;
