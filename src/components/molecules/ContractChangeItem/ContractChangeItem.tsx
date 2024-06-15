import {
  ContractData,
  CreateLawContractData,
  CreatePersonContractData,
  UpdateContractData,
} from '@src/components/types/types';

import styles from './ContractChangeItem.module.scss';
import { useAdminStore } from '@src/store/adminStore';
import { useEffect } from 'react';

interface ContractChangeItemProps {
  contract: ContractData;
  setModalDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContractChangeItem({ contract, setModalDisplay }: ContractChangeItemProps) {
  const { data, userId, type, isFinished, contactId, tariffId } = contract;
  const isPerson = type === 'person';

  const { updateContract, getContracts } = useAdminStore((state) => state);

  const handlerFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData);

    const updateContractData: UpdateContractData = {
      contractId: contactId,
      tariffId: tariffId.tariffId,
      data: { ...formJson } as unknown as CreateLawContractData | CreatePersonContractData,
      type,
      isFinished: Boolean(formJson.isFinished),
    };

    updateContract(updateContractData);
    setModalDisplay((prev) => !prev);
  };

  useEffect(
    () => () => {
      getContracts();
    },
    [],
  );

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerFormSubmit}>
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
        {isFinished && (
          <a
            href={`${import.meta.env.VITE_BASE_URL}contract/create-pdf?uuid=${contactId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src='src/assets/admin/download-icon.png' className={styles.download} />
          </a>
        )}
      </form>
    </div>
  );
}

export default ContractChangeItem;
