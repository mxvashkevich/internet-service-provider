import { ContractData } from '@src/components/types/types';

import styles from './ImageContent.module.scss';

interface ImageContentProps {
  contract: ContractData;
}

function ImageContent({ contract }: ImageContentProps) {
  return (
    <div className={styles.images}>
      <img src={contract.passportScan[0]} />
      <img src={contract.passportScan[1]} />
    </div>
  );
}

export default ImageContent;
