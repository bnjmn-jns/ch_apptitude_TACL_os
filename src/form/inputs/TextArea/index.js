import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Theme from 'assets/theme';

import { StyledInput } from './styles';

class TextArea extends React.Component {
  handleChange = e => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };

  render() {
    const {
      placeholder,
      className,
      disabled,
      hasStatus,
      onBlur,
      value,
      showClearIcon,
      displayValidationBorderColor,
      theme,
    } = this.props;
    const { handleChange } = this;

    const inputProps = {
      value,
      disabled,
      onBlur,
      hasStatus,
      showClearIcon,
      className,
      theme,
      displayValidationBorderColor,
      placeholder,
      onChange: handleChange,
      dir: theme.rtl ? 'rtl' : 'ltr',
    };

    return <StyledInput {...inputProps} />;
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  hasStatus: PropTypes.object,
  showClearIcon: PropTypes.bool,
  displayValidationBorderColor: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.object,
};

TextArea.defaultProps = {
  value: '',
  type: 'text',
  disabled: false,
  hasStatus: {
    message: '',
    type: '',
  },
  theme: Theme,
};

export default withTheme(TextArea);
