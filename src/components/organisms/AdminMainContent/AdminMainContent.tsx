import { ContractData } from '@src/components/types/types';

import styles from './AdminMainContent.module.scss';
import AdminContractItem from '@src/components/molecules/AdminContractItem/AdminContractItem';

interface AdminMainContentProps {
  contracts: ContractData[];
}

function AdminMainContent({ contracts }: AdminMainContentProps) {
  return (
    <div className={styles.contractContainer}>
      {contracts.map((c, i) => (
        <AdminContractItem key={c.contactId} contract={c} index={i} />
      ))}
    </div>
  );
}

export default AdminMainContent;
