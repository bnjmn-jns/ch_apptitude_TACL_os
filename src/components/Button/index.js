import React from 'react';
import PropTypes from 'prop-types';

import Icon, { iconPropTypes } from '../Icon';
import { StyledButton, StyledA, StyledLink } from './styles';
import { Spinner } from '../Loader';
import { messageShape, statusTypeShape } from '../../propTypes';

import { deprecateFeatureOrProp } from '../../helpers';

const getButtonContent = (children, message, status) => {
  if (status === 'loading') {
    return <Spinner color="white" size={22} />;
  }
  if (status === 'success' || status === 'error') {
    const iconPaths = {
      error: 'x',
      success: 'check',
    };
    return <Icon path={iconPaths[status]} color="white" size={16} strokeWidth={2} />;
  }

  return message || children;
};

const ButtonComponent = ({
  message,
  href,
  linkTo,
  query,
  className,
  children,
  status: oldStatus,
  hasStatus,
  onClick,
  type,
  theme,
  ...etc
}) => {
  if (oldStatus) {
    deprecateFeatureOrProp('status', 'prop', 'Button', '1.0', "'hasStatus' prop");
  }
  const status = hasStatus ? hasStatus.type : oldStatus;

  const content = getButtonContent(children, message, status);

  const otherProps = { ...etc };
  delete otherProps.linkTo;
  delete otherProps.query;
  delete otherProps.selfEnd;
  delete otherProps.showClearIcon;

  if (href) {
    const handleClick = e => (status ? e.preventDefault() : onClick()); // I'm almose sure this is useless // keep it for now, to test (href can not have onClick)
    return (
      <StyledA href={href} className={className} onClick={handleClick} theme={theme} {...otherProps}>
        {content}
      </StyledA>
    );
  } else if (linkTo) {
    const toParams = {
      pathname: linkTo,
      query: { ...query },
    };
    return (
      <StyledLink to={toParams} activeClassName="active" className={className} theme={theme} {...otherProps}>
        {content}
      </StyledLink>
    );
  } else if (type === 'submit') {
    delete otherProps.onClick;
    return (
      <StyledButton className={className} hasStatus={hasStatus} theme={theme} {...otherProps}>
        {content}
      </StyledButton>
    );
  }

  const handleClick = e => (status ? e.preventDefault() : onClick()); // Keep here to prevent error to get onClick when it doesn't existe
  return (
    <StyledButton className={className} hasStatus={hasStatus} onClick={handleClick} theme={theme} {...otherProps}>
      {content}
    </StyledButton>
  );
};

const buttonProps = {
  message: messageShape,
  status: PropTypes.oneOf(['loading', 'error', 'success']),
  href: PropTypes.string,
  linkTo: PropTypes.string,
  type: PropTypes.string,
  query: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.array, messageShape]),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      ...iconPropTypes,
    }),
  ]),
  iconColor: PropTypes.string,
  background: PropTypes.string,
  hoverBackground: PropTypes.string,
  borderColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  hoverIconColor: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.object,
  hasStatus: statusTypeShape,
};
ButtonComponent.propTypes = buttonProps;

export default ButtonComponent;
