import { Checkbox, Typography } from '@mui/material';

import styles from './TitledCheckbox.module.scss';

interface ITitledCheckboxProps {
  title: string;
}

function TitledCheckbox({ title }: ITitledCheckboxProps) {
  return (
    <div className={styles.container}>
      <Checkbox />
      <Typography>{title}</Typography>
    </div>
  );
}

export default TitledCheckbox;
