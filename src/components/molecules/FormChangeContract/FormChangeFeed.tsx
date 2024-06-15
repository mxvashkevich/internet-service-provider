import { FeedData } from '@src/components/types/types';

import styles from './FormChangeContract.module.scss';

interface ContractChangeItemProps {
  contract: FeedData;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

function FormChangeFeed({ contract, onSubmit = () => {} }: ContractChangeItemProps) {
  const { isActive, userId } = contract;

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1>{'Физическое лицо'}</h1>
        <input type='text' name='fullName' defaultValue={userId.fullName} />
        <input
          type='text'
          name='login'
          placeholder='Логин пользователя'
          defaultValue={userId.login}
        />
        <input type='text' name='phone' placeholder='Телефон' defaultValue={userId.phone} />
        <input type='text' name='type' placeholder='Тип пользователя' defaultValue={userId.type} />
        <div>
          <span>Активная ли короткая заявка?</span>
          <input name='isFinished' type='checkbox' defaultChecked={isActive} />
        </div>
        <button type='submit'>Редактировать</button>
      </form>
    </>
  );
}

export default FormChangeFeed;
