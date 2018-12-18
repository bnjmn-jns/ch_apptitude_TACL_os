import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledRadio, StyledRadioGroup, StyledLabel } from './styles';
import { wrapInTextComponent } from '../../helpers';

import Theme from 'assets/theme';

class RadioInputGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      selectedValue: this.props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.selectedValue) {
      this.setState({ selectedValue: nextProps.value });
    }
  }

  handleChange = value => {
    this.setState({ selectedValue: value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    const { disabled, name, className, theme } = this.props;
    const { selectedValue, options } = this.state;
    const { inputStyles } = theme;

    return (
      <StyledRadioGroup className={className} selectedValue={selectedValue} onChange={this.handleChange}>
        {options.map(option => (
          <span key={option.key || `${name}-${option.value}`}>
            <StyledRadio
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              disabled={disabled || option.disabled}
              colors={inputStyles.colors}
            />
            <StyledLabel disabled={disabled || option.disabled} htmlFor={`${name}-${option.value}`} theme={theme}>
              {wrapInTextComponent(option.label, {
                size: inputStyles.fontSize.labelText,
                color: disabled || option.disabled ? inputStyles.colors.disabledText : inputStyles.colors.labelText,
              })}
            </StyledLabel>
          </span>
        ))}
      </StyledRadioGroup>
    );
  }
}

RadioInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          defaultMessage: PropTypes.string.isRequired,
        }),
      ]),
      value: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.bool, PropTypes.node]).isRequired,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  theme: PropTypes.object,
};

RadioInputGroup.defaultProps = {
  theme: Theme,
};

export default withTheme(RadioInputGroup);
