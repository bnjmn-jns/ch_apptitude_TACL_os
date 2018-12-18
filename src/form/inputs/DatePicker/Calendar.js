import React from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { DayPickerSingleDateController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import reactMomentProptypes from 'react-moment-proptypes';
import Icon from '../../../components/Icon';
import { CalendarWrapper, PointerFang } from './styles';
import { momentiseDate } from './helpers';

class Calendar extends React.PureComponent {
  getDateRange = (date, range) => {
    if (typeof range === 'function') {
      return range(date);
    }

    if (range && range.start && range.end) {
      const start = momentiseDate(range.start);
      const end = momentiseDate(range.end);

      return date.isBefore(start) || date.isAfter(end);
    }
    return null;
  };

  render() {
    const {
      className,
      double,
      date,
      onChange,
      allowedDateRange,
      focused,
      initialVisibleMonth,
      theme,
      theme: { inputStyles: { colors } },
    } = this.props;

    const propsIn = {
      date,
      initialVisibleMonth,
      focused,
      hideKeyboardShortcutsPanel: true,
      onDateChange: onChange,
      numberOfMonths: double ? 2 : 1,
      navNext: <Icon path="chevronRight" color={colors.icon} size={20} />,
      navPrev: <Icon path="chevronLeft" color={colors.icon} size={20} />,
      isOutsideRange: singleDate => this.getDateRange(singleDate, allowedDateRange),
    };

    return (
      <CalendarWrapper className={className} theme={theme}>
        <PointerFang />
        <DayPickerSingleDateController {...propsIn} />
      </CalendarWrapper>
    );
  }
}

Calendar.propTypes = {
  date: reactMomentProptypes.momentObj,
  onChange: PropTypes.func,
  initialVisibleMonth: PropTypes.oneOfType([PropTypes.func, reactMomentProptypes.momentObj]),
  double: PropTypes.bool,
  focused: PropTypes.bool,
  className: PropTypes.string,
  allowedDateRange: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      start: PropTypes.oneOfType([PropTypes.string, reactMomentProptypes.momentObj]),
      end: PropTypes.oneOfType([PropTypes.string, reactMomentProptypes.momentObj]),
    }),
  ]),
  theme: PropTypes.object,
};

export default Calendar;
