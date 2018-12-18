import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { StyledInput } from './styles';
import { Wrapper } from '../NumberInput/styles';
import { InputIcon } from '../styles';
import { iconPropTypes } from '../../../components/Icon';

import Theme from 'assets/theme'; // eslint-disable-line

class InputText extends React.Component {
  constructor() {
    super();
    this.state = {
      focused: false,
    };
  }

  sanitiseMaskInputValue = value => {
    const { returnRawValue, mask } = this.props;

    if (mask && returnRawValue) {
      return value.replace(/_/g, '');
    }
    return value;
  };

  handleChange = e => {
    const { onChange } = this.props;
    const { value } = e.target;

    if (onChange) {
      onChange(this.sanitiseMaskInputValue(value));
    }
  };

  handleFocus = () => {
    this.setState({ focused: true });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  handleBlur = () => {
    this.setState({ focused: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  focusInput = () => this.inputElement.focus();

  render() {
    const {
      className,
      placeholder,
      disabled,
      hasStatus,
      value,
      type,
      mask,
      showClearIcon,
      displayValidationBorderColor,
      iconProps,
      theme,
      theme: { inputStyles },
    } = this.props;
    if (type === 'hidden') return null;

    const inputProps = {
      className,
      type,
      value,
      disabled,
      displayValidationBorderColor,
      mask,
      theme,
      showClearIcon,
      hasStatus,
      inputRef: ref => (this.inputElement = ref),
    };

    return (
      <Wrapper
        focused={this.state.focused}
        disabled={disabled}
        theme={theme}
        hasStatus={hasStatus}
        displayValidationBorderColor={displayValidationBorderColor}
        onClick={this.focusInput}
      >
        {iconProps && (
          <InputIcon size={inputStyles.fontSize.inputText} color={inputStyles.colors.icon || iconProps.color} {...iconProps} />
        )}
        <StyledInput
          dir={theme.rtl ? 'rtl' : 'ltr'}
          placeholder={placeholder}
          onChange={this.handleChange}
          theme={theme}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          {...inputProps}
        />
      </Wrapper>
    );
  }
}

InputText.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  hasStatus: PropTypes.object,
  type: PropTypes.oneOf(['text', 'email', 'url', 'password', 'hidden']).isRequired,
  showClearIcon: PropTypes.bool,
  returnRawValue: PropTypes.bool,
  displayValidationBorderColor: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.object,
  iconProps: PropTypes.shape(iconPropTypes),
};

InputText.defaultProps = {
  value: '',
  type: 'text',
  disabled: false,
  returnRawValue: true,
  theme: Theme,
};

export default withTheme(InputText);
