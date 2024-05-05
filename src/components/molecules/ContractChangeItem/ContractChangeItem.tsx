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
  const { data, userId, tariffId, type, contactId, isFinished } = contract;
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
      isFinished,
    };

    updateContract(updateContractData); // TODO в contract_data закидывать
    // alert(successMessage || errorMessage);
    setModalDisplay((prev) => !prev);
  };

  const isPerson = type === 'person';

  useEffect(() => {
    console.log(contract.passportScan[0]);
    return () => {
      getContracts();
    };
  }, []);

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
            {/* <input type='checkbox' value={isFinished} /> */}
            <button type='submit'>Редактировать</button>
          </>
        ) : (
          <>
            <h1>{'Юридическое лицо'}</h1>
            <input type='text' name='phone' defaultValue={userId.phone} />
            <input type='text' name='email' defaultValue={data.data.email} />
            <input
              type='text'
              name='orgAddress'
              defaultValue={(data.data as CreateLawContractData).orgAddress}
            />
            <input type='text' name='orgtoUser' defaultValue={userId.fullName} />
            <input type='text' name='price' placeholder='Цена' />
            <input type='text' name='regNumber' placeholder='Регистрационный номер' />
            <input type='text' name='INN' placeholder='ИНН' />
            <input type='text' name='KPP' placeholder='КПП' />
            <input type='text' name='accountNumber' placeholder='Номер аккаунта' />
            <input type='text' name='BIK' placeholder='БИК' />
            <button type='submit'>Редактировать</button>
          </>
        )}
      </form>
    </div>
  );
}

export default ContractChangeItem;
