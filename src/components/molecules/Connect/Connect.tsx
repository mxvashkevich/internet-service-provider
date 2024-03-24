import styles from './Connect.module.scss';

interface ConnectProps {
  href?: string;
  onClick?: () => void;
  imgSource: string;
  imgAlter: string;
  desc: string;
}

function Connect({ href, onClick, imgSource, imgAlter, desc }: ConnectProps) {
  const isWithLink = href && !onClick;
  return (
    <div className={styles.container}>
      <figure>
        {isWithLink ? (
          <a href={href} rel='noreferrer' target='_blank'>
            <img src={imgSource} alt={imgAlter} className={styles.image} />
          </a>
        ) : (
          <img src={imgSource} alt={imgAlter} className={styles.image} onClick={onClick} />
        )}
        <figcaption>{desc}</figcaption>
      </figure>
    </div>
  );
}

export default Connect;
