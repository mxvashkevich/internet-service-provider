import { ContractData, UpdateContractData } from '@src/components/types/types';

import styles from './ContractChangeItem.module.scss';
import { useAdminStore } from '@src/store/adminStore';

interface ContractChangeItemProps {
  contract: ContractData;
  // setModalDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContractChangeItem({ contract }: ContractChangeItemProps) {
  const { data, userId, tariffId, type, contactId, isFinished } = contract;
  const { updateContract, errorMessage, successMessage } = useAdminStore((state) => state);

  const handlerFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData);
    console.log('form>>> ', formJson, isFinished, typeof isFinished);
    const updateContractData: UpdateContractData = {
      contractId: contactId,
      tariffId: tariffId.tariffId,
      type,
      isFinished,
      ...formJson,
    };
    // createContract(formJson as FullBidForm, 'law', getTariffId(tariffs, 'Бизнес', tariffValue));
    updateContract(updateContractData);
    alert(successMessage || errorMessage);
  };

  const isPerson = type === 'person';

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerFormSubmit}>
        {isPerson ? (
          <>
            <h1>{'Физическое лицо'}</h1>
            <input type='text' name='fullName' defaultValue={userId.fullName} />
            <input type='text' name='address' defaultValue={data.data.address} />
            <input type='text' name='email' defaultValue={data.data.email} />
            <input type='text' name='phone' defaultValue={userId.phone} />
            <input type='text' name='passportSeria' placeholder='Серия паспорта' />
            <input type='text' name='passportNumber' placeholder='Номер паспорта' />
            <input type='text' name='passportByWho' placeholder='Кем выдан паспорт' />
            <input type='text' name='passportGetDate' placeholder='Дата выдачи паспорта' />
            <input type='text' name='passportBirthDate' placeholder='Дата рождения' />
            <input type='text' name='passportRegAddress' placeholder='Адрес регистрации' />
            {/* <input type='checkbox' value={isFinished} /> */}
            <button type='submit'>Редактировать</button>
          </>
        ) : (
          <>
            <h1>{'Юридическое лицо'}</h1>
            <input type='text' name='phone' defaultValue={userId.phone} />
            <input type='text' name='email' defaultValue={data.data.email} />
            <input type='text' name='orgAddress' defaultValue={data.data.address} />
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
