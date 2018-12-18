import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Theme from 'assets/theme';

import Icon from '../Icon';
import StatusIcon from '../Icon/StatusIcon';
import { StyledCard, PositionedText, X } from './styles';

import { deprecateFeatureOrProp } from '../../helpers';
import { statusTypeShape } from '../../propTypes';

const Alert = ({ type: oldType, hasStatus, className, message, dismiss, theme }) => {
  if (oldType) {
    deprecateFeatureOrProp('type', 'prop', 'Alert', '1.0', "'hasStatus' prop (with a type property)");
  }
  const type = hasStatus ? hasStatus.type : oldType;

  return (
    <StyledCard type={type} className={className} theme={theme}>
      <StatusIcon hasStatus={hasStatus} type={oldType} size={16} />
      <PositionedText tag="p" size={theme.base.font.size.md} message={message} theme={theme} />
      <X onClick={dismiss}>
        <Icon path="x" size={15} />
      </X>
    </StyledCard>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'error', 'success', '']),
  hasStatus: statusTypeShape,
  dismiss: PropTypes.func,
  message: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.object,
};

Alert.defaultProps = {
  theme: Theme,
};

export default withTheme(Alert);
