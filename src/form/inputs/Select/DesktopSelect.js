import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Option } from 'rc-select';
import 'rc-select/assets/index.css';

import Theme from 'assets/theme';

import { InputContainer } from '../styles';
import { StyledSelect, RightBoxWithChevron, injectGlobalSelectStyles } from './styles';

import { messageShape, statusTypeShape } from '../../../propTypes';

class DesktopSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: this.props.value,
      hovering: false,
      focused: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.selectedValue) {
      this.setState({ selectedValue: nextProps.value });
    }
  }

  handleChange = selectedValue => {
    this.setState({ selectedValue });
    if (this.props.onChange) {
      this.props.onChange(selectedValue);
    }
  };

  handleMouseEnter = () => {
    if (this.state.hovering === false) {
      this.setState({ hovering: true });
    }
  };

  handleMouseLeave = () => {
    if (this.state.hovering === true) {
      this.setState({ hovering: false });
    }
  };

  toggleFocusState = () => {
    this.setState(prevState => ({ focused: !prevState.focused }));
  };

  render() {
    const {
      options,
      onChange,
      placeholder,
      className,
      notFoundMessage,
      isCombobox,
      theme,
      hasStatus,
      displayValidationBorderColor,
      disabled,
      ...etc
    } = this.props;

    const { selectedValue } = this.state;

    const isObject = options[0].value;

    const getOptions = () => {
      if (!isObject) {
        return options.map(option => ({
          label: option,
          value: option,
        }));
      }
      return options;
    };

    const processedOptions = getOptions();

    const rcSelectOptions = {
      showArrow: false,
      showSearch: isCombobox,
      notFoundContent: notFoundMessage,
      allowClear: false,
      optionLabelProp: 'children',
      optionFilterProp: 'children',
      placeholder,
      backfill: false,
    };

    injectGlobalSelectStyles(theme);

    return (
      <InputContainer
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.toggleFocusState}
        onBlur={this.toggleFocusState}
        className={className}
      >
        <StyledSelect
          {...rcSelectOptions}
          value={selectedValue}
          tabIndex={0}
          onSelect={this.handleChange}
          hasStatus={hasStatus}
          displayValidationBorderColor={displayValidationBorderColor}
          disabled={disabled}
          {...etc}
          theme={theme}
        >
          {processedOptions &&
            processedOptions.map(option => (
              <Option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </Option>
            ))}
        </StyledSelect>
        <RightBoxWithChevron
          disabled={disabled}
          hovering={this.state.hovering}
          focused={this.state.focused}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          hasStatus={hasStatus}
          displayValidationBorderColor={displayValidationBorderColor}
          theme={theme}
        />
      </InputContainer>
    );
  }
}

DesktopSelect.defaultProps = {
  isCombobox: true,
  label: '',
  theme: Theme,
};

const { oneOfType, number, string, array, arrayOf, bool, func, shape, object } = PropTypes;

DesktopSelect.propTypes = {
  value: oneOfType([number, string]),
  placeholder: messageShape,
  defaultValue: string,
  options: oneOfType([
    array,
    arrayOf(
      shape({
        disabled: bool,
        value: string.isRequired,
        label: string,
        key: string,
      }),
    ),
  ]),
  onChange: func,
  className: string,
  notFoundMessage: string,
  isCombobox: bool,
  hasStatus: statusTypeShape,
  displayValidationBorderColor: bool,
  theme: object,
  disabled: bool,
};

export default withTheme(DesktopSelect);
