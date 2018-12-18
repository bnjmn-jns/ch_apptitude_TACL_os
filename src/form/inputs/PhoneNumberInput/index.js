import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.i18n';

import iso2Countries from './iso2CountryCodes';
import { countryCodes } from './country_codes';
import { messageShape } from '../../../propTypes';

import { Wrapper, StyledSelect as Select, EmojiFlag } from './styles';

import Theme from 'assets/theme'; // eslint-disable-line

const countryValues = countryCodes.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)).map(country => ({
  label: `${country.emoji} ${country.name}`,
  value: country.code,
  key: `${country.code} ${country.name}`,
}));

class PhonenumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      searching: false,
    };
  }

  handleValueChange = e => {
    const { onChange, returnRawValue, value } = this.props;
    const phoneNumber = returnRawValue ? e.target.rawValue : e.target.value;
    const newValue = {
      countryCode: value ? value.countryCode : null,
      phoneNumber,
    };

    if (onChange) {
      onChange(newValue);
    }
  };

  handleRegionChange = countryCode => {
    const { onChange, value } = this.props;
    const newValue = {
      countryCode,
      phoneNumber: value ? value.phoneNumber : '',
    };

    if (onChange) {
      onChange(newValue);
    }
    this.setState({ focused: true, searching: false }, () => this.inputElement.focus());
  };

  handleFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
    this.setState({ focused: true });
  };

  handleBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
    this.setState({ focused: false });
  };

  handleSelectFocus = () => {
    this.setState({ searching: true });
  };

  handleSelectBlur = () => {
    this.setState({ searching: false });
  };

  getEmojiFlag = code => {
    const country = countryCodes.find(c => code.toUpperCase() === c.code);
    return country ? country.emoji : code;
  };

  render() {
    const { state, handleFocus, handleBlur, handleSelectFocus, handleSelectBlur } = this;
    const {
      className,
      placeholder,
      disabled,
      hasStatus,
      value: valueProp,
      regionSelectable,
      regionPlaceholder,
      theme,
      defaultValue,
      showClearIcon,
      displayValidationBorderColor,
    } = this.props;

    const value = valueProp || {
      countryCode: null,
      phoneNumber: '',
    };

    const { countryCode, phoneNumber } = value || defaultValue;

    const regCode = countryCode ? countryCode.toUpperCase() : countryCode;

    return (
      <Wrapper
        className={className}
        disabled={disabled}
        hasStatus={hasStatus}
        displayValidationBorderColor={displayValidationBorderColor}
        focused={state.focused}
        value={phoneNumber}
        regionSelectable={regionSelectable}
        theme={theme}
        showClearIcon={showClearIcon}
      >
        {regionSelectable && (
          <Select
            focused={state.focused}
            searching={state.searching}
            options={countryValues}
            onChange={this.handleRegionChange}
            hasStatus={hasStatus}
            displayValidationBorderColor={displayValidationBorderColor}
            value={regCode}
            defaultValue={defaultValue.countryCode}
            placeholder={regionPlaceholder}
            disabled={disabled}
            onFocus={handleSelectFocus}
            onBlur={handleSelectBlur}
            theme={theme}
          />
        )}
        {regionSelectable && countryCode && !state.searching && <EmojiFlag flag={this.getEmojiFlag(countryCode)} theme={theme} />}
        <Cleave
          placeholder={placeholder}
          options={{ phone: true, phonecountryCode: regCode }}
          onChange={this.handleValueChange}
          value={phoneNumber || ''}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          autoFocus={state.focused}
          htmlRef={ref => (this.inputElement = ref)}
        />
      </Wrapper>
    );
  }
}

PhonenumberInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      phoneNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      countryCode: PropTypes.oneOf([...iso2Countries, ...iso2Countries.map(code => code.toLowerCase())]),
    }),
  ]),
  placeholder: messageShape,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  returnRawValue: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  hasStatus: PropTypes.object,
  regionSelectable: PropTypes.bool,
  regionPlaceholder: messageShape,
  defaultValue: PropTypes.shape({
    countryCode: PropTypes.string,
    phoneNumber: PropTypes.string,
  }),
  showClearIcon: PropTypes.bool,
  displayValidationBorderColor: PropTypes.bool,
  theme: PropTypes.object,
};

PhonenumberInput.defaultProps = {
  defaultValue: {},
  unitPosition: 'end',
  disabled: false,
  theme: Theme,
};

export default withTheme(PhonenumberInput);
