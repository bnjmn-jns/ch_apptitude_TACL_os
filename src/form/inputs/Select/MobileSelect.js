import React from 'react';
import PropTypes from 'prop-types';

import { RightBoxWithChevron, SelectElement } from './styles';
import { InputContainer } from '../styles';
import Theme from 'assets/theme';

class Select extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: this.props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.selectedValue) {
      this.setState({ selectedValue: nextProps.value });
    }
  }

  handleChange = e => {
    const selectedOption = e.target.value;
    this.setState({ selectedOption });
    if (this.props.onChange) {
      this.props.onChange(selectedOption);
    }
  };

  passKeyPress = e => {
    this.selectElement.dispatchEvent(new KeyboardEvent('down', { code: e.which }));
  };

  render() {
    const { options, className, theme, theme: { rtl }, placeholder } = this.props;
    const { selectedOption } = this.state;

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

    return (
      <InputContainer>
        <SelectElement
          className={className}
          value={selectedOption}
          onChange={this.handleChange}
          tabIndex={-1}
          innerRef={x => {
            this.selectElement = x;
          }}
          rtl={rtl}
          inputStyles={theme.inputStyles}
        >
          {placeholder && (
            <option hidden value="null" key="🍕">
              {placeholder}
            </option>
          )}
          {options &&
            processedOptions.map(option => (
              <option key={option.value || option} value={option.value || option} disabled={option.disabled}>
                {option.label || option.value || option}
              </option>
            ))}
        </SelectElement>
        <RightBoxWithChevron className="select-right-box" theme={theme} />
      </InputContainer>
    );
  }
}

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({ disabled: PropTypes.bool, value: PropTypes.string.isRequired, label: PropTypes.string })),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.object,
};

Select.defaultProps = {
  disabled: false,
  selectedOption: '',
  theme: Theme,
};

export default Select;
