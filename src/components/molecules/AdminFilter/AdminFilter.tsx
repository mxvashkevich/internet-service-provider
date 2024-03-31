import { Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

import { TitledCheckbox } from '@src/components/atoms';

import styles from './AdminFilter.module.scss';

function AdminFilter() {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <aside className={styles.container}>
        <div className={styles.calendar}>
          <Typography>Дата</Typography>
          <img
            src={`src/assets/admin/calendar-icon.png`}
            alt='icon-calendar'
            className={styles.image}
            onClick={() => {}}
          />
        </div>
        <DatePicker
          label={'Дата'}
          format='dd-MM-yyyy'
          sx={{ width: '255px', height: 'inherit', borderRadius: '16px', border: '2px solid gray' }}
          slotProps={{ textField: { size: 'small' } }}
          onChange={(e) => {
            console.log(e);
          }}
        />
        <div className={styles.product}>
          <Typography>Дата</Typography>
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
