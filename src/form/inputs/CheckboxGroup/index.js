import React from 'react';
import PropTypes from 'prop-types';
import 'rc-checkbox/assets/index.css';
import { withTheme } from 'styled-components';

import { wrapInTextComponent } from '../../helpers';
import { CheckboxGroupWrapper, StyledLabel, StyledCheckbox } from './styles';
import Theme from 'assets/theme';

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: this.props.options,
    };
  }

  setCheckedValue = (optionIn, key) => {
    const option = optionIn;
    const options = this.state.options;
    option.checked = !option.checked;
    options[key] = option;
    this.setState({
      options,
    });
    this.props.onChange(option);
  };

  render() {
    const { options } = this.state;
    const { name, className, displayCheckMark, theme, disabled } = this.props;
    const { inputStyles } = theme;

    return (
      <CheckboxGroupWrapper name={name} className={className}>
        {options.map((option, key) => (
          <StyledLabel key={option.value} disabled={option.disabled || disabled} inputStyles={inputStyles}>
            <StyledCheckbox
              onChange={() => this.setCheckedValue(option, key)}
              checked={option.checked}
              disabled={option.disabled || disabled}
              displayCheckMark={displayCheckMark}
              theme={theme}
            />
            {wrapInTextComponent(option.label, { size: inputStyles.fontSize.labelText, color: inputStyles.colors.labelText })}
          </StyledLabel>
        ))}
      </CheckboxGroupWrapper>
    );
  }
}

CheckboxGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool,
      value: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.string, PropTypes.number, PropTypes.bool])
        .isRequired,
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          defaultMessage: PropTypes.string.isRequired,
        }),
      ]),
    }),
  ).isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  displayCheckMark: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.object,
};

CheckboxGroup.defaultProps = {
  displayCheckMark: true,
  theme: Theme,
};

export default withTheme(CheckboxGroup);
