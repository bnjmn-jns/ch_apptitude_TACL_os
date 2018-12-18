import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Text from '../../../components/Text';
import { deprecateFeatureOrProp } from '../../../helpers';

import Theme from 'assets/theme'; // eslint-disable-line
import { UnitBox, Wrapper, StyledInput, UnitSelect, injectSelectStyles } from './styles';
import { InputIcon } from '../styles';

import { iconPropTypes } from '../../../components/Icon';

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      searching: false,
    };
  }

  handleInputChange = (e, hasMultipleUnitOptions) => {
    const { onChange, value } = this.props;
    const number = e.target.value;

    if (hasMultipleUnitOptions) {
      const newValue = {
        number,
        unit: value && value.unit,
      };

      if (onChange) {
        this.props.onChange(newValue);
        return;
      }
    }
    if (onChange) {
      this.props.onChange(number);
    }
  };

  handleUnitSelectChange = (unit, unitPosition) => {
    const { onChange, value } = this.props;
    const newValue = {
      unit,
      number: value ? value.number : '',
    };

    if (onChange) {
      onChange(newValue);
    }
    this.setState({ focused: true, searching: false }, () => {
      if (unitPosition && unitPosition !== 'end') this.inputElement.focus();
    });
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

  handleSelectFocus = () => {
    this.setState({ searching: true });
  };

  handleSelectBlur = () => {
    this.setState({ searching: false });
  };

  getSelectAlignmentValue = (unitPosition, rtl) =>
    [[['tl', 'bl'], ['tr', 'br']], [['tr', 'br'], ['tl', 'bl']]][Number(unitPosition === 'end')][Number(rtl)];

  focusInput = () => this.inputElement.focus();

  render() {
    const {
      handleSelectFocus,
      handleSelectBlur,
      handleUnitSelectChange,
      handleInputChange,
      handleBlur,
      handleFocus,
      state,
    } = this;

    const {
      className,
      placeholder,
      disabled,
      hasStatus,
      value,
      unit,
      units,
      min,
      max,
      showClearIcon,
      theme,
      displayValidationBorderColor,
      iconProps,
      theme: { inputStyles, rtl },
    } = this.props;

    const { fontSize, colors } = inputStyles;

    if (unit) {
      deprecateFeatureOrProp('unit', 'prop', 'NumberInput', '1.0', 'units prop');
    }

    const unitPosition = units && units.position;

    const unitIsSelect = units && units.options && Array.isArray(units.options) && units.options.length > 1;

    const inputProps = {
      className,
      value: unitIsSelect ? value.number : value,
      placeholder,
      disabled,
      hasStatus,
      min,
      max,
      rtl,
      unitPosition,

      inputStyles,
      displayValidationBorderColor,
      innerRef: ref => (this.inputElement = ref),
      onChange: e => handleInputChange(e, unitIsSelect),
      onBlur: handleBlur,
      onFocus: handleFocus,
      type: 'number',
      key: 'input',
    };

    const Input = <StyledInput key="input" {...inputProps} />;
    const Icon = iconProps ? (
      <InputIcon
        key="icon"
        size={inputStyles.fontSize.inputText}
        color={inputStyles.colors.icon || iconProps.color}
        {...iconProps}
      />
    ) : null;
    const smallSelectWidth = inputStyles.spacing.height * 2;
    const largeSelectWidth = inputStyles.spacing.height * 3;

    injectSelectStyles(largeSelectWidth);

    // const alignment = unitIsSelect && units.position === 'end' ? ['tr', 'br'] : ['tl', 'bl'];
    const alignment = this.getSelectAlignmentValue(units && units.position, rtl);

    /* eslint-disable*/
    const getInputUnitOrder = (Unit, Input, rtl, Icon) => {
      const order = units && units.position === 'start' ? [Unit, Icon, Input] : units ? [Input, Icon, Unit] : [Icon, Input];
      return Array.isArray(order) && rtl ? order.reverse() : order;
    };

    /* eslint-enable*/

    const Unit = unitIsSelect ? (
      <UnitSelect
        key="unitSelect"
        dropdownAlign={{
          points: alignment,
          offset: [0, inputStyles.spacing.padding.sm / 2],
          overflow: {
            adjustX: 0,
            adjustY: 1,
          },
        }}
        dropdownClassName="numberInputDropDown"
        dropdownMatchSelectWidth={false}
        units={units}
        options={units && units.options}
        disabled={disabled}
        value={value.unit}
        onChange={val => handleUnitSelectChange(val, units.position)}
        onFocus={handleSelectFocus}
        onBlur={handleSelectBlur}
        focused={state.focused}
        searching={state.searching}
        smallWidth={smallSelectWidth}
        largeWidth={largeSelectWidth}
        key="unitSelect"
      />
    ) : (
      <UnitBox
        key="unit"
        unitPosition={units && units.position}
        value={value}
        theme={theme}
        showClearIcon={showClearIcon}
        disabled={disabled}
      >
        <Text tag="p" color={colors.labelText} size={fontSize.labelText} message={units && units.options} noSelect />
      </UnitBox>
    );

    return (
      <Wrapper
        focused={state.focused}
        disabled={disabled}
        theme={theme}
        hasStatus={hasStatus}
        displayValidationBorderColor={displayValidationBorderColor}
        onClick={this.focusInput}
      >
        {/* eslint-disable*/}
        {getInputUnitOrder(Unit, Input, rtl, Icon)}
        {/* eslint-enable*/}
      </Wrapper>
    );
  }
}

const { string, oneOfType, bool, func, object, number, shape, oneOf, arrayOf } = PropTypes;

NumberInput.propTypes = {
  className: string,
  value: oneOfType([
    number,
    string,
    shape({
      number,
      unit: string,
    }),
  ]).isRequired,
  placeholder: string,
  disabled: bool,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  onFocus: func,
  hasStatus: object,
  unit: oneOfType([
    number,
    string,
    shape({
      id: string.isRequired,
      defaultMessage: string.isRequired,
    }),
  ]),
  units: shape({
    position: oneOf(['start', 'end']),
    options: oneOfType([arrayOf(string), string]),
  }),
  min: number,
  max: number,
  showClearIcon: bool,
  displayValidationBorderColor: bool,
  iconProps: shape(iconPropTypes),
  theme: object,
};

NumberInput.defaultProps = {
  value: '',
  disabled: false,
  theme: Theme,
};

export default withTheme(NumberInput);
