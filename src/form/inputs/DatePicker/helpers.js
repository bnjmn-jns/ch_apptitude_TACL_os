import moment from 'moment';

export const momentiseDate = date => (date instanceof moment ? date : moment(date));

export const getFullValidMomentObject = (date, displayFormat) => {
  if (date && date.replace(/\D/g, '').length === 8) {
    const newDate = moment(date, displayFormat);
    return newDate.isValid() ? newDate : date;
  }
  return date;
};

export const dateIsWithinDateRange = (date, range) => {
  if (typeof range === 'function') {
    return range(date);
  }

  if (range && range.start && range.end) {
    const start = momentiseDate(range.start);
    const end = momentiseDate(range.end);

    return !date.isBefore(start) && !date.isAfter(end);
  }
  return true;
};
