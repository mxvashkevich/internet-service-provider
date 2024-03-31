import { Checkbox, Typography } from '@mui/material';

import styles from './TitledCheckbox.module.scss';
import { Dispatch, SetStateAction } from 'react';

interface ITitledCheckboxProps {
  title: string;
  className?: string;
  checked?: boolean;
  onClick?: Dispatch<SetStateAction<boolean>>;
}

function TitledCheckbox({ title, className, checked, onClick }: ITitledCheckboxProps) {
  const handleClick = () => {
    if (!onClick) return;
    console.log(checked);
    onClick((prevState) => {
      console.log(prevState);
      return !prevState;
    });
  };
  return (
    <div className={`${styles.container} ${className || ''}`}>
      {onClick ? (
        <Checkbox checked={checked} onClick={handleClick} />
      ) : (
        <Checkbox onClick={handleClick} />
      )}
      <Typography>{title}</Typography>
    </div>
  );
}

export default TitledCheckbox;
