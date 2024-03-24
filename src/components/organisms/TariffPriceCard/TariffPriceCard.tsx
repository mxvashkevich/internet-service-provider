import { MouseEventHandler, MouseEvent, useState, useLayoutEffect } from 'react';
import { Link } from '@mui/material';

import { Colors, fullBidDescriptions, smallBidDescriptions } from '@src/components/constants';
import { FullBid, SmallBid } from '@src/components/molecules/index';
import { Modal } from '@src/components/organisms';

import styles from './TariffPriceCard.module.scss';

type TSpeedValues = 200 | 300 | 400 | 500;
type TPrices = 350 | 500 | 750 | 950;
type TSpaceValues = 1 | 1.5;

interface ITariffPriceCardProps {
  speedValue?: TSpeedValues;
  spaceValue?: TSpaceValues;
  price?: TPrices;
  description?: string;
  headColor: keyof typeof Colors;
  benefits: string[];
  hasToggle: boolean;
}

function TariffPriceCard(props: ITariffPriceCardProps) {
  const { speedValue, spaceValue, price, description, headColor, benefits, hasToggle } = props;

  const [isBenefitsDisplay, setBenefitsDisplay] = useState(true);
  const [isDisplayModal, setDisplayModal] = useState(false);
  const [heightContainer, setHeightContainer] = useState('645px');

  const linkHandleClick: MouseEventHandler<HTMLAnchorElement> = (
    e: MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    setBenefitsDisplay((prev) => !prev);
  };

  const handlerClickHeadCard = () => {
    setDisplayModal(true);
  };

  useLayoutEffect(() => {
    switch (true) {
      case speedValue && isBenefitsDisplay:
        setHeightContainer('645px');
        break;
      case speedValue && !isBenefitsDisplay:
        setHeightContainer('445px');
        break;
      case !hasToggle:
        setHeightContainer('550px');
        break;
      default:
        setHeightContainer('645px');
        break;
    }
  });

  return (
    <div
      className={styles.container}
      style={{ height: heightContainer, width: price ? '384px' : '550px' }}
    >
      <img className={styles.image} src={`src/assets/h-s-2/head-${headColor}.png`} />
      <div className={styles.cardHeader}>
        {speedValue ? (
          <h1 className={styles.speedValue} onClick={handlerClickHeadCard}>
            {`Мбит/с ${speedValue}`}
          </h1>
        ) : (
          <h1 className={styles.spaceValue} onClick={handlerClickHeadCard}>
            Гб {spaceValue}
          </h1>
        )}
        {price && (
          <p className={styles.price}>
            <span className={styles.ruble}>₽</span>
            {price}
            <span className={styles.desc}>/мес</span>
          </p>
        )}
      </div>
      <div className={styles.cardContent}>
        {price && <p>{description}</p>}
        {isBenefitsDisplay && (
          <ul>
            {benefits.map((benefit) => (
              <li key={`${benefit.length + 1}`}>{benefit}</li>
            ))}
          </ul>
        )}
        {hasToggle && (
          <Link href='#' onClick={linkHandleClick} className={styles.link}>
            {isBenefitsDisplay ? 'Скрыть детали плана' : 'Посмотреть подробности плана'}
          </Link>
        )}
      </div>
      <Modal
        isDisplay={isDisplayModal}
        setDisplay={setDisplayModal}
        isBigContent
        hasCloseBtn={false}
      >
        {price ? (
          <FullBid color={headColor} description={fullBidDescriptions[headColor]} />
        ) : (
          <SmallBid color={headColor} description={smallBidDescriptions[headColor]} />
        )}
      </Modal>
    </div>
  );
}

export default TariffPriceCard;
