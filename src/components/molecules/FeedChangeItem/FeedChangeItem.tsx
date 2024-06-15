import { FeedData } from '@src/components/types/types';
import { useAdminStore } from '@src/store/adminStore';
import { useEffect } from 'react';
import styles from './FeedChangeItem.module.scss';
import FormChangeFeed from '../FormChangeContract/FormChangeFeed';

interface FeedChangeItemProps {
  contract: FeedData;
  setModalDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

function FeedChangeItem({ contract, setModalDisplay }: FeedChangeItemProps) {
  const { updateFeeds, getFeeds } = useAdminStore((state) => state);

  const handlerFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    updateFeeds();

    setModalDisplay((prev) => !prev);
  };

  useEffect(() => () => {
    getFeeds();
  });

  return (
    <div className={styles.container}>
      <FormChangeFeed contract={contract} onSubmit={handlerFormSubmit} />
    </div>
  );
}
export default FeedChangeItem;
