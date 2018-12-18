import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Text from '../../../components/Text';
import { Wrapper, Option } from './styles';

import { messageShape } from '../../../propTypes';

class ToggleInput extends React.Component {
  handleChange = (value, disabled) => {
    if (this.props.onChange && !disabled && !this.props.disabled) {
      this.props.onChange(value);
    }
  };

  handleKeyPress = (e, option) => {
    if ((e.keyCode === 32 || e.keyCode === 13) && this.props.onChange && !option.disabled && !this.props.disabled) {
      e.preventDefault();
      this.props.onChange(option.value);
    }
  };

  getOptionsAsArrayOfObjects = options => {
    const isObject = options[0].value;
    if (!isObject) {
      return options.map(option => ({
        label: option,
        value: option,
      }));
    }
    return options;
  };

  getTextColor = (disabled, isSelectedOption, colors) => {
    if (disabled) {
      return isSelectedOption ? colors.labelText : colors.disabledText;
    }
    return isSelectedOption ? 'white' : colors.labelText;
  };

  render() {
    const { options, value, disabled, className, theme } = this.props;

    const optionsObjectArray = this.getOptionsAsArrayOfObjects(options);

    return (
      <Wrapper className={className} inputStyles={theme.inputStyles} disabled={disabled}>
        {optionsObjectArray.map(option => {
          const isSelectedOption = option.value === value;
          const { colors } = theme.inputStyles;
          return (
            <Option
              isSelectedOption={isSelectedOption}
              disabled={disabled || option.disabled}
              onClick={() => this.handleChange(option.value, option.disabled)}
              onKeyDown={e => this.handleKeyPress(e, option)}
              tabIndex={option.disabled || isSelectedOption ? -2 : 0}
              key={option.value}
            >
              <Text
                message={option.label}
                size={theme.inputStyles.fontSize.labelText}
                noSelect
                tag="p"
                color={this.getTextColor(disabled || option.disabled, isSelectedOption, colors)}
              />
            </Option>
          );
        })}
      </Wrapper>
    );
  }
}

ToggleInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
      label: messageShape,
      value: messageShape,
    }),
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.object,
};

export default withTheme(ToggleInput);
