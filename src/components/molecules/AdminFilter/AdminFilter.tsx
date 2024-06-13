import { Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

import { TitledCheckbox } from '@src/components/atoms';

import styles from './AdminFilter.module.scss';

interface AdminFilterProps {
  changeFilter: React.Dispatch<React.SetStateAction<string>>;
  changeDate: React.Dispatch<React.SetStateAction<Date>>;
}

function AdminFilter({ changeFilter, changeDate }: AdminFilterProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <aside className={styles.container}>
        <DatePicker
          label={'Дата'}
          format='dd-MM-yyyy'
          sx={{ width: '255px', height: 'inherit', borderRadius: '16px', border: '2px solid gray' }}
          slotProps={{ textField: { size: 'small' } }}
          onChange={(e) => {
            // changeDate(e.);
          }}
        />
        <div className={styles.product}>
          <Typography>Продукт</Typography>
        </div>
        <div className={styles.filter}>
          <TitledCheckbox className={styles.flexBetween} title='Домашний 200' />
          <TitledCheckbox className={styles.flexBetween} title='Домашний 300' />
          <TitledCheckbox className={styles.flexBetween} title='Домашний 400' />
          <TitledCheckbox className={styles.flexBetween} title='Домашний 500' />
          <TitledCheckbox className={styles.flexBetween} title='Бизнес 1' />
          <TitledCheckbox className={styles.flexBetween} title='Бизнес 1.5' />
        </div>
      </aside>
    </LocalizationProvider>
  );
}

export default AdminFilter;
