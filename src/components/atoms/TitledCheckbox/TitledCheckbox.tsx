import { Checkbox, Typography } from '@mui/material';

import styles from './TitledCheckbox.module.scss';
import { Dispatch, SetStateAction } from 'react';

interface ITitledCheckboxProps {
  title: string;
  name: string;
  className?: string;
  checked?: boolean;
  onClick?: Dispatch<SetStateAction<boolean>>;
}

function TitledCheckbox({ title, name, className, checked, onClick }: ITitledCheckboxProps) {
  const handleClick = () => {
    if (!onClick) return;
    onClick((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className={`${styles.container} ${className || ''}`}>
      {onClick ? (
        <Checkbox name={name} checked={checked} onClick={handleClick} />
      ) : (
        <Checkbox name={name} onClick={handleClick} />
      )}
      <Typography>{title}</Typography>
    </div>
  );
}

export default TitledCheckbox;
