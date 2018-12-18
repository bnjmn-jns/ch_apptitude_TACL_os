import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Line } from 'rc-progress';

import Text from '../Text';

import Theme from 'assets/theme';

import { getStatusColor } from './helpers';
import { Wrapper, ProgressContainer, ProgressOutline, InlineDisplay, PositionedIcon } from './styles';
import { statusTypeShape } from '../../propTypes';
import { deprecateFeatureOrProp } from '../../helpers';

const LineProgress = ({ percentage, theme, status, hasStatus, className }) => {
  if (status) {
    deprecateFeatureOrProp('status', 'prop', 'CircleProgress', '1.0', "'hasStatus' prop");
  }
  const type = hasStatus ? hasStatus.type : status;

  const percentText = (
    <Text tag="p" size={theme.base.font.size.md}>
      {Math.floor(percentage)}%
    </Text>
  );

  return (
    <Wrapper className={className}>
      <ProgressContainer>
        <ProgressOutline status={type} theme={theme}>
          <Line
            percent={percentage}
            strokeWidth={2}
            trailColor={theme.base.colors.background}
            strokeColor={getStatusColor(type, theme)}
          />
        </ProgressOutline>
      </ProgressContainer>
      <InlineDisplay>
        {type && type !== 'inProgress' ? <PositionedIcon hasStatus={hasStatus} size={15} /> : percentText}
      </InlineDisplay>
    </Wrapper>
  );
};

LineProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  hasStatus: statusTypeShape,
  status: PropTypes.oneOf(['error', 'warning', 'success', 'inProgress']),
  className: PropTypes.string,
  theme: PropTypes.object,
};
LineProgress.defaultProps = {
  theme: Theme,
};

export default withTheme(LineProgress);
