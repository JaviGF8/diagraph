import addMonths from 'date-fns/addMonths';
import format from 'date-fns/format';
import subMonths from 'date-fns/subMonths';

export const DATE_FORMAT = 'dd/MM/yyyy';
export const HOUR_FORMAT = 'HH:mm:ss';
export const FULL_FORMAT = `${DATE_FORMAT} ${HOUR_FORMAT}`;

export const dateToString = (date) => format(date, FULL_FORMAT);

export const addMonthsToDate = (date, months) => addMonths(date, months);
export const subtractMonthsToDate = (date, months) => subMonths(date, months);
