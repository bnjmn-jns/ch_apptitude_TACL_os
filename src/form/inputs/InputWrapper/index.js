import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { InputContainer } from '../styles';
import {
  Label,
  LabelText,
  InnerLabel,
  LabelContainer,
  DescriptionText,
  StyledX,
  PositionBlock,
  PositionBlockHideSmallScreens,
  ErrorMessage,
  PositionedStatusIcon,
  PositionedFormHelper,
} from './styles';
import { deprecateFeatureOrProp } from '../../../helpers';

import Theme from 'assets/theme'; //eslint-disable-line

import { messageShape, statusTypeShape } from '../../../propTypes';

class InputWrapper extends Component {
  clearInputFunction = () => this.props.onChange('');

  disableEventPropagation = event => {
    if (this.props.stopPropagation && event.stopPropagation) {
      event.stopPropagation();
      event.preventDefault();
    } else if (this.props.stopPropagation && window.event) {
      window.event.cancelBubble = true;
    }
  };

  render() {
    const { clearInputFunction } = this;
    const {
      hasStatus,
      labelText,
      disabled,
      showClearIcon,
      required,
      children,
      value,
      className,
      labelAtTop,
      formHelper,
      displayValidationMessage,
      displayStatusIcon,
      displayFormHelper,
      noValidation,
      labelPosition,
      description,
      theme,
    } = this.props;

    const { inputStyles, rtl } = theme;

    if (typeof noValidation !== 'undefined') {
      deprecateFeatureOrProp('noValidation', 'prop', 'InputWrapper/Field', false, 'displayValidationMessage prop');
    }

    let labelTextString = labelText;
    if (required) {
      labelTextString += '*';
    }

    const childrenWithProps = React.Children.map(
      children,
      child => (child ? React.cloneElement(child, { showClearIcon }) : null),
    );

    return (
      <div className={className} onClick={this.disableEventPropagation}>
        <Label
          displayValidationMessage={displayValidationMessage}
          inputStyles={inputStyles}
          onClick={this.disableEventPropagation}
          labelPosition={labelPosition}
          rtl={rtl}
        >
          {labelText && (
            <LabelContainer inputStyles={inputStyles} labelPosition={labelPosition} labelAtTop={labelAtTop} rtl={rtl}>
              <LabelText
                tag="p"
                weight="bold"
                size={inputStyles.fontSize.labelText}
                message={labelTextString}
                inputStyles={inputStyles}
                align="inherit"
                labelPosition={labelPosition}
                color={inputStyles.colors.labelText}
                description={description}
                rtl={rtl}
                noSelect
              />
              {description && (
                <DescriptionText
                  labelPosition={labelPosition}
                  inputStyles={inputStyles}
                  tag="p"
                  size={inputStyles.fontSize.validationText}
                  color={inputStyles.colors.placeholderText}
                  rtl={rtl}
                  message={description}
                  align="inherit"
                />
              )}
            </LabelContainer>
          )}
          <InnerLabel rtl={rtl}>
            <InputContainer>
              {childrenWithProps}
              {displayValidationMessage &&
                hasStatus &&
                hasStatus.type &&
                hasStatus.type !== 'success' && (
                  <ErrorMessage
                    size={inputStyles.fontSize.validationText}
                    color={hasStatus && inputStyles.colors[hasStatus.type]}
                    tag="p"
                    message={hasStatus.message}
                    inputStyles={inputStyles}
                    rtl={rtl}
                  />
                )}
            </InputContainer>
            {showClearIcon && value && !disabled && <StyledX onClick={clearInputFunction} inputStyles={inputStyles} rtl={rtl} />}
            {displayFormHelper && (
              <PositionBlock>
                {formHelper && (
                  <PositionedFormHelper
                    content={formHelper.content}
                    trigger={formHelper.trigger}
                    inputStyles={inputStyles}
                    rtl={rtl}
                  />
                )}
              </PositionBlock>
            )}
            {displayStatusIcon && (
              <PositionBlockHideSmallScreens>
                {hasStatus &&
                  (hasStatus &&
                    hasStatus.type && <PositionedStatusIcon hasStatus={hasStatus} inputStyles={inputStyles} rtl={rtl} />)}
              </PositionBlockHideSmallScreens>
            )}
          </InnerLabel>
        </Label>
      </div>
    );
  }
}

const { string, bool, oneOf, oneOfType, object, shape, func, instanceOf, number, node } = PropTypes;

InputWrapper.propTypes = {
  className: string,
  hasStatus: statusTypeShape,
  stopPropagation: bool,
  labelText: messageShape,
  description: messageShape,
  disabled: bool,
  required: bool,
  labelAtTop: bool,
  onChange: func,
  value: oneOfType([string, number, object, bool, instanceOf(Date)]),
  children: node,
  displayStatusIcon: bool,
  showClearIcon: bool,
  noValidation: bool,
  displayValidationMessage: bool,
  displayFormHelper: bool,
  theme: object,
  formHelper: shape({
    content: messageShape.isRequired,
    trigger: oneOf(['hover', 'click']),
  }),
  labelPosition: oneOf(['top', 'left']),
};

InputWrapper.defaultProps = {
  displayStatusIcon: true,
  displayValidationMessage: true,
  displayFormHelper: true,
  labelPosition: 'left',
  theme: Theme,
};

export default withTheme(InputWrapper);
