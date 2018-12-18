import React from 'react';
import Icon from '../../../components/Icon';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import { InputWrapper } from './styles';
import { getFullValidMomentObject } from './helpers';
import { statusTypeShape } from '../../../propTypes';

const CalendarIcon = ({ inputStyles }) => <Icon path="calendar" color={inputStyles.colors.icon} size={16} />;

class Input extends React.Component {
  handleInputChange = e => {
    const { value: date } = e.target;
    const { onChange, displayFormat } = this.props;

    if (onChange) {
      onChange(getFullValidMomentObject(date, displayFormat));
    }
  };

  handleKeyPress = e => {
    const code = e.keyCode ? e.keyCode : e.which;

    if (code === 13 || code === 27) {
      this.props.closeCalendar();
      this.inputMask.getInputDOMNode().blur();
    }
  };

  render() {
    const {
      onFocus,
      onBlur,
      placeholder,
      disabled,
      displayFormat,
      focused,
      value: inputValue,
      showClearIcon,
      hasStatus,
      displayValidationBorderColor,
      withCalendar,
      theme,
    } = this.props;

    const mask = displayFormat && displayFormat.replace(/[A-Za-z0-9]/g, '9');

    return (
      <InputWrapper
        disabled={disabled}
        focused={focused}
        theme={theme}
        showClearIcon={showClearIcon}
        value={inputValue}
        hasStatus={hasStatus}
        displayValidationBorderColor={displayValidationBorderColor}
      >
        {withCalendar && <CalendarIcon inputStyles={theme.inputStyles} />}
        <InputMask
          ref={node => {
            this.inputMask = node;
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          value={inputValue}
          mask={mask}
          placeholder={placeholder || displayFormat}
          disabled={disabled}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyPress}
        />
      </InputWrapper>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  closeCalendar: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  displayFormat: PropTypes.string,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  showClearIcon: PropTypes.bool,
  displayValidationBorderColor: PropTypes.bool,
  hasStatus: statusTypeShape,
  theme: PropTypes.object,
};

CalendarIcon.propTypes = {
  inputStyles: PropTypes.object,
};

export default Input;
