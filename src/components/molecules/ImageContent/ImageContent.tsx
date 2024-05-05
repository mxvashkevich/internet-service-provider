import { ContractData } from '@src/components/types/types';

import styles from './ImageContent.module.scss';

interface ImageContentProps {
  contract: ContractData;
}

function ImageContent({ contract }: ImageContentProps) {
  const hasImageContent = Boolean(contract.passportScan.length);
  return (
    <div className={styles.images}>
      {hasImageContent ? (
        <>
          <img src={contract.passportScan[0]} />
          <img src={contract.passportScan[1]} />
        </>
      ) : (
        <div> Нет фотографий </div>
      )}
    </div>
  );
}

export default ImageContent;
