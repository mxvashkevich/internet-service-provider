import { ContractData } from '@src/components/types/types';
import { formatDate } from '@src/utils/formatDate';

import styles from './AdminMainContent.module.scss';

interface AdminMainContentProps {
  contracts: ContractData[];
}

function AdminMainContent({ contracts }: AdminMainContentProps) {
  console.log(contracts)
  return (
    <>
      {contracts.map((c, i) => (
        <div key={c.contactId} className={styles.contractElem}>
          <h1>Договор № {i + 1}</h1>
          <p>{c.data.data.email}</p>
          <p>{c.data.data.address}</p>
          <p>{formatDate(c.created_at)}</p>
        </div>
      ))}
    </>
  );
}

export default AdminMainContent;
