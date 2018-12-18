import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import moment from 'moment';
import reactMomentProptypes from 'react-moment-proptypes';

import CalendarComponent from './Calendar';
import Input from './input';

import Theme from 'assets/theme';

class DatePicker extends React.PureComponent {
  constructor(props) {
    super(props);
    moment.locale(props.locale);
    this.state = {
      focused: false,
    };
  }

  handleOutsideClick = e => {
    if (this.wrapper && this.wrapper.contains(e.target)) {
      return;
    }
    this.closeCalendar();
  };

  handleFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
    this.openCalendar();
  };

  handleBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  openCalendar = () => {
    document.addEventListener('click', this.handleOutsideClick, false);
    this.setState({ focused: true });
  };

  closeCalendar = () => {
    document.removeEventListener('click', this.handleOutsideClick, false);
    this.setState({ focused: false });
  };

  handleDateChange = dateIn => {
    const date = moment(dateIn).isValid() ? moment(dateIn) : dateIn;
    document.removeEventListener('click', this.handleOutsideClick, false);
    if (this.props.onChange) {
      this.props.onChange(date);
    }
    this.closeCalendar();
  };

  render() {
    const { handleFocus, handleBlur, closeCalendar } = this;
    const { focused } = this.state;
    const {
      value,
      onChange,
      className,
      double,
      placeholder,
      displayFormat,
      allowedDateRange,
      withCalendar,
      showClearIcon,
      hasStatus,
      displayValidationBorderColor,
      theme,
      disabled,
    } = this.props;
    const calendarDate = moment(value).isValid() ? moment(value) : null;
    const nonNullValue = value === null || value === undefined ? '' : value;
    const inputDate = moment(nonNullValue).isValid() ? moment(nonNullValue).format(displayFormat) : nonNullValue;

    const calendarProps = {
      date: calendarDate,
      initialVisibleMonth: () => calendarDate || moment(),
      onChange: newDate => {
        this.closeCalendar();
        onChange(newDate);
      },
      double,
      displayFormat,
      allowedDateRange,
      focused,
      placeholder,
      theme,
    };

    const inputProps = {
      value: inputDate,
      displayFormat,
      allowedDateRange,
      onChange,
      hasStatus,
      displayValidationBorderColor,
      closeCalendar,
      onBlur: handleBlur,
      onFocus: handleFocus,
      placeholder,
      focused,
      showClearIcon,
      theme,
      withCalendar,
      disabled,
    };

    return (
      <div
        className={className}
        ref={node => {
          this.wrapper = node;
        }}
      >
        <Input {...inputProps} />
        {withCalendar && focused && <CalendarComponent {...calendarProps} />}
      </div>
    );
  }
}

DatePicker.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    reactMomentProptypes.momentObj,
    PropTypes.string, // Just adding for clearing input
  ]),
  displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  double: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  locale: PropTypes.string,
  allowedDateRange: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      start: PropTypes.oneOfType([PropTypes.string, reactMomentProptypes.momentObj]),
      end: PropTypes.oneOfType([PropTypes.string, reactMomentProptypes.momentObj]),
    }),
  ]),
  withCalendar: PropTypes.bool,
  showClearIcon: PropTypes.bool,
  displayValidationBorderColor: PropTypes.bool,
  theme: PropTypes.object,
};

DatePicker.defaultProps = {
  displayFormat: 'DD.MM.YYYY',
  locale: 'fr',
  withCalendar: true,
  theme: Theme,
};

export default withTheme(DatePicker);
