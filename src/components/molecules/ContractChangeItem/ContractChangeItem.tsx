import {
  ContractData,
  CreateLawContractData,
  CreatePersonContractData,
  UpdateContractData,
} from '@src/components/types/types';

import styles from './ContractChangeItem.module.scss';
import { useAdminStore } from '@src/store/adminStore';
import { useEffect } from 'react';
import FormChangeContract from '../FormChangeContract/FormChangeContract';

interface ContractChangeItemProps {
  contract: ContractData;
  setModalDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContractChangeItem({ contract, setModalDisplay }: ContractChangeItemProps) {
  const { tariffId, type, contactId } = contract;

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

  useEffect(() => {
    return () => {
      getContracts();
    };
  }, []);

  return (
    <div className={styles.container}>
      <FormChangeContract contract={contract} onSubmit={handlerFormSubmit} />
    </div>
  );
}

export default ContractChangeItem;
