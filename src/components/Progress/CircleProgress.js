import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Circle } from 'rc-progress';

import { getStatusColor } from './helpers';
import {
  ProgressContainer,
  CircleWrapper as Wrapper,
  CirclePositionedIcon as PositionedIcon,
  CirclePositionedText as PositionedText,
} from './styles';
import Theme from 'assets/theme'; // eslint-disable-line

import { statusTypeShape } from '../../propTypes';
import { deprecateFeatureOrProp } from '../../helpers';

const CircleProgress = ({ size, status, hasStatus, className, percentage, theme }) => {
  if (status) {
    deprecateFeatureOrProp('status', 'prop', 'CircleProgress', '1.0', "'hasStatus' prop");
  }
  const type = hasStatus ? hasStatus.type : status || 'inProgress';

  const CenterContent = () => {
    const statusIconPaths = {
      success: 'check',
      warning: 'exclamation',
      error: 'exclamation',
    };

    const PercentText = () => {
      if (percentage) {
        return (
          <PositionedText tag="p" size={size * 3}>
            {percentage}%
          </PositionedText>
        );
      }
      return null;
    };

    const CenterIcon = () => <PositionedIcon path={statusIconPaths[type]} color={getStatusColor(type, theme)} size={size * 6} />;

    return type && type !== 'inProgress' ? <CenterIcon /> : <PercentText />;
  };

  return (
    <Wrapper size={size} className={className}>
      <ProgressContainer>
        <Circle
          percent={percentage}
          strokeWidth={3}
          trailWidth={3}
          trailColor={theme.inputStyles.colors.backgroundDisabled}
          strokeColor={getStatusColor(type, theme)}
        />
      </ProgressContainer>
      <CenterContent />
    </Wrapper>
  );
};

CircleProgress.propTypes = {
  percentage: PropTypes.number,
  status: PropTypes.oneOf(['error', 'warning', 'success', 'inProgress']),
  hasStatus: statusTypeShape,
  size: PropTypes.number,
  className: PropTypes.string,
  theme: PropTypes.object,
};

CircleProgress.defaultProps = {
  percentage: 0,
  size: 10,
  theme: Theme,
};

export default withTheme(CircleProgress);
