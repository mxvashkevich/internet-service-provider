import { useState } from 'react';

import { AboutInfo, Modal } from '@src/components/organisms';
import { Connect } from '@src/components/molecules';
import { connectDescs } from '@src/components/constants';

import styles from './AboutSection2.module.scss';

function AboutSection2() {
  const [isModalDisplay, setModalDisplay] = useState<boolean>(false);

  const handleClickImg = () => {
    setModalDisplay((prev) => !prev);
  };

  return (
    <section className={styles.container}>
      <article className={styles.btnContainer}>
        <Connect
          desc={connectDescs.chat}
          href='https://t.me/vshmx'
          imgAlter='logo-image-chat-bot'
          imgSource='src/assets/a-s-2/logo-1.png'
        />
        <Connect
          desc={connectDescs.support}
          onClick={handleClickImg}
          imgAlter='logo-image-support'
          imgSource='src/assets/a-s-2/logo-2.png'
        />
      </article>
      <Modal isDisplay={isModalDisplay} setDisplay={setModalDisplay}>
        <AboutInfo />
      </Modal>
    </section>
  );
}

export default AboutSection2;
