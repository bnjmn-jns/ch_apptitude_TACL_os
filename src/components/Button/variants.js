import React from 'react';
import { withTheme } from 'styled-components';

import Button, { buttonProps } from './';
import Text from '../Text';
import { StyledIconInButton } from './styles';

import Theme from 'assets/theme'; // eslint-disable-line

import { deprecate, deprecateFeatureOrProp } from '../../helpers';

export const PrimaryButtonComponent = props => {
  const { theme: { buttonStyles }, onClick, className, message, values, status: oldStatus, hasStatus, disabled } = props;

  if (oldStatus) {
    deprecateFeatureOrProp('status', 'prop', 'PrimaryButton', '1.0', "'hasStatus' prop");
  }

  const status = hasStatus ? hasStatus.type : oldStatus;

  return (
    <Button
      background={buttonStyles.colors.primaryBackground}
      hoverBackground={buttonStyles.colors.primaryBackgroundHover}
      fontColor="white"
      message={message}
      values={values}
      onClick={onClick}
      className={className}
      hasStatus={status}
      disabled={disabled}
      {...props}
    />
  );
};

export const SecondaryButtonComponent = props => {
  const { theme: { buttonStyles }, message, values, onClick, className, disabled } = props;

  return (
    <Button
      background="transparent"
      fontColor={buttonStyles.colors.ghostText}
      hoverFontColor={buttonStyles.colors.ghostTextHover}
      borderColor={buttonStyles.colors.ghostBorder}
      hoverBorderColor={buttonStyles.colors.ghostBorderHover}
      message={message}
      values={values}
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...props}
    />
  );
};

export const IconButtonComponent = props => {
  const {
    theme: { buttonStyles, base, rtl },
    background,
    hoverBackground,
    borderColor,
    hoverBorderColor,
    iconColor,
    hoverIconColor,
    onClick,
    className,
    icon,
    message,
    linkTo,
    values,
    disabled,
    font,
  } = props;

  const { padding } = base.spacing;

  if (typeof icon === 'string') {
    deprecateFeatureOrProp('icon', 'prop', 'IconButton', '1.0', "'icon' as object prop.");
  }
  if (hoverIconColor) {
    deprecateFeatureOrProp('hoverIconColor', 'prop', 'IconButton', '1.0', "'icon' as object prop.");
  }
  if (iconColor) {
    deprecateFeatureOrProp('iconColor', 'prop', 'IconButton', '1.0', "'icon' as object prop.");
  }

  const getButtonContents = () => {
    const IconComponent =
      typeof icon === 'object' ? (
        <StyledIconInButton padding={padding} key="icon" size={18} message={message} rtl={rtl} {...icon} />
      ) : (
        <StyledIconInButton
          path={icon}
          color={iconColor}
          fontColor={(font && font.color) || base.colors.gullGray}
          hoverColor={hoverIconColor}
          size={18}
          message={message}
          rtl={rtl}
        />
      );

    const MessageComponent = (
      <Text message={message} values={values} size={(font && font.size) || base.font.size.md} key="message" color="inherit" />
    );
    let IconAndMessage = [IconComponent, MessageComponent];
    IconAndMessage = rtl ? IconAndMessage.reverse() : IconAndMessage;
    return message ? IconAndMessage : IconComponent;
  };

  const contents = getButtonContents();

  return (
    <Button
      background={background || 'transparent'}
      hoverBackground={hoverBackground || 'transparent'}
      borderColor={borderColor || buttonStyles.colors.ghostBorder}
      hoverBorderColor={hoverBorderColor || buttonStyles.colors.ghostBorderHover}
      hoverIconColor={icon.hoverColor || hoverIconColor}
      className={className}
      onClick={onClick}
      disabled={disabled}
      fontColor={font && font.color}
      hoverFontColor={font && font.hoverColor}
      linkTo={linkTo}
    >
      {contents}
    </Button>
  );
};

export const IconButtonWithTextComponent = props => {
  const {
    message,
    icon,
    theme: { buttonStyles, base },
    background,
    hoverBackground,
    fontColor,
    hoverFontColor,
    borderColor,
    hoverBorderColor,
    hoverIconColor,
    iconColor,
    values,
    className,
    onClick,
    disabled,
  } = props;

  deprecate('IconButtonWithTextComponent', '1.0', "'IconButton' component with a 'message' prop");

  const { padding } = base.spacing;

  return (
    <Button
      background={background || 'transparent'}
      hoverBackground={hoverBackground || 'transparent'}
      fontColor={fontColor || buttonStyles.colors.ghostText}
      hoverFontColor={hoverFontColor || buttonStyles.colors.ghostTextHover}
      borderColor={borderColor || buttonStyles.colors.ghostBorder}
      hoverBorderColor={hoverBorderColor || buttonStyles.colors.ghostBorderHover}
      hoverIconColor={hoverIconColor}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      <StyledIconInButton path={icon} color={iconColor} size={16} padding={padding} message={message} />
      <Text message={message} values={values} size={base.font.size.md} color="inherit" />
    </Button>
  );
};

export const ConfirmButtonComponent = props => {
  const { theme: { base: { colors } }, onClick, className, disabled } = props;
  deprecate('ConfirmButtonComponent', '1.0', 'the primary button with a success status');
  return (
    <IconButtonComponent
      icon={{ path: 'check', color: 'white' }}
      background={colors.success}
      hoverBackground={colors.successDark}
      borderColor="transparent"
      hoverBorderColor="transparent"
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...props}
    />
  );
};

export const PositiveButtonComponent = props => {
  const { theme: { base: { colors } }, message, onClick, className, disabled } = props;

  return (
    <Button
      background={colors.success}
      hoverBackground={colors.successDark}
      onClick={onClick}
      className={className}
      message={message}
      disabled={disabled}
      {...props}
    />
  );
};

PrimaryButtonComponent.propTypes = buttonProps;
SecondaryButtonComponent.propTypes = buttonProps;
IconButtonComponent.propTypes = buttonProps;
IconButtonWithTextComponent.propTypes = buttonProps;
ConfirmButtonComponent.propTypes = buttonProps;
PositiveButtonComponent.propTypes = buttonProps;

const defaultProps = {
  theme: Theme,
};

PrimaryButtonComponent.defaultProps = defaultProps;
SecondaryButtonComponent.defaultProps = defaultProps;
IconButtonComponent.defaultProps = defaultProps;
IconButtonWithTextComponent.defaultProps = defaultProps;
ConfirmButtonComponent.defaultProps = defaultProps;
PositiveButtonComponent.defaultProps = defaultProps;

const PrimaryButton = withTheme(PrimaryButtonComponent);
const SecondaryButton = withTheme(SecondaryButtonComponent);
const IconButton = withTheme(IconButtonComponent);
const IconButtonWithText = withTheme(IconButtonWithTextComponent);
const ConfirmButton = withTheme(ConfirmButtonComponent);
const PositiveButton = withTheme(PositiveButtonComponent);

export { PrimaryButton, SecondaryButton, PositiveButton, IconButton, IconButtonWithText, ConfirmButton };
