import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { messageShape } from '../../propTypes';

import Theme from 'assets/theme';

import StatusIcon from '../Icon/StatusIcon';
import { StyledCard, PositionedText } from './styles';

import { deprecateFeatureOrProp } from '../../helpers';
import { statusTypeShape } from '../../propTypes';

const Message = ({ hasStatus, type: oldType, message, className, theme }) => {
  if (type) {
    deprecateFeatureOrProp('type', 'prop', 'Message', '1.0', "'hasStatus' prop");
  }

  const type = hasStatus ? hasStatus.type : oldType;

  return (
    <StyledCard className={className}>
      <StatusIcon hasStatus={hasStatus} size={16} />
      <PositionedText tag="p" size={theme.base.font.size.md} message={message} theme={theme} />
    </StyledCard>
  );
};

Message.propTypes = {
  hasStatus: statusTypeShape,
  type: PropTypes.oneOf(['info', 'warning', 'error', 'success', '']),
  message: PropTypes.oneOfType([messageShape, PropTypes.node]),
  theme: PropTypes.object,
  className: PropTypes.string,
};

Message.defaultProps = {
  theme: Theme,
};

export default withTheme(Message);
