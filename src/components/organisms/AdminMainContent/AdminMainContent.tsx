import { ContractData, FeedData } from '@src/components/types/types';

import styles from './AdminMainContent.module.scss';
import AdminContractItem from '@src/components/molecules/AdminContractItem/AdminContractItem';
import AdminFeedItem from '@src/components/molecules/AdminContractItem/AdminFeedItem';

interface AdminMainContentProps {
  contracts: (ContractData | FeedData)[];
}

function AdminMainContent({ contracts }: AdminMainContentProps) {
  return (
    <div className={styles.contractContainer}>
      {contracts.map((c, i) =>
        'contactId' in c ? (
          <AdminContractItem key={c.contactId} contract={c} index={i} />
        ) : (
          <AdminFeedItem key={c.feedId} contract={c} index={i} />
        ),
      )}
    </div>
  );
}

export default AdminMainContent;
