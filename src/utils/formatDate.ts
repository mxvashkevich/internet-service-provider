import { DateTime } from 'luxon';

export function formatDate(created_at: string) {
  return DateTime.fromISO(created_at).toFormat('dd-MM-yyyy');
}
