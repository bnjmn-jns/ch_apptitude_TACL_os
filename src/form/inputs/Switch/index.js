import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { StyledSwitch as Switch, Wrapper, SwitchToggle, BehindLabel, LabelGroup } from './styles';
import Text from '../../../components/Text';
import Theme from 'assets/theme';

class InputSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.on) {
      this.setState({ on: nextProps.value });
    }
  }

  toggleSwitch = () => {
    if (!this.props.disabled) {
      const on = !this.state.on;
      if (this.props.onChange) {
        this.props.onChange(on);
      }
      this.setState({ on });
    }
  };

  handleClick = () => {
    this.toggleSwitch();
  };

  handleKeyPress = e => {
    if ((e.keyCode === 32 || e.keyCode === 13) && !this.props.disabled) {
      e.preventDefault();
      this.toggleSwitch();
    }
  };

  render() {
    const { disabled, theme, className, displayInnerLabel, messages } = this.props;
    const { on } = this.state;
    const { inputStyles, rtl } = theme;
    const { innerLabels } = messages;

    return (
      <Wrapper
        disabled={disabled}
        onKeyDown={this.handleKeyPress}
        tabIndex={disabled ? -1 : 0}
        theme={theme}
        className={className}
      >
        <Switch
          onClick={this.toggleSwitch}
          on={on}
          disabled={disabled}
          inputStyles={inputStyles}
          label={displayInnerLabel}
          displayInnerLabel={displayInnerLabel}
        >
          <SwitchToggle displayInnerLabel={displayInnerLabel} on={on} inputStyles={inputStyles} rtl={rtl}>
            {displayInnerLabel && (
              <Text
                message={innerLabels[Number(on)]}
                size={inputStyles.fontSize.validationText}
                tag="p"
                block
                align="center"
                color={on && 'white'}
                noSelect
              />
            )}
          </SwitchToggle>
          {displayInnerLabel && (
            <LabelGroup>
              <BehindLabel
                message={innerLabels[0]}
                isYes={false}
                size={inputStyles.fontSize.validationText}
                align="center"
                rtl={rtl}
                noSelect
                color={inputStyles.colors.placeholderText}
              />
              <BehindLabel
                message={innerLabels[1]}
                isYes
                size={inputStyles.fontSize.validationText}
                align="center"
                rtl={rtl}
                noSelect
                color={inputStyles.colors.placeholderText}
              />
            </LabelGroup>
          )}
        </Switch>
      </Wrapper>
    );
  }
}

const { bool, func, string, shape, arrayOf, object } = PropTypes;

InputSwitch.propTypes = {
  value: bool,
  disabled: bool,
  onChange: func,
  className: string,
  messages: shape({
    innerLabels: arrayOf(string),
  }),
  displayInnerLabel: bool,
  theme: object,
};
InputSwitch.defaultProps = {
  value: false,
  disabled: false,
  theme: Theme,
  messages: { innerLabels: ['no', 'yes'] },
  displayInnerLabel: false,
};

export default withTheme(InputSwitch);
