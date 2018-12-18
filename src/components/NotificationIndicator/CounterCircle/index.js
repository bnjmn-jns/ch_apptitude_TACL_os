import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../../Text';

import Theme from 'assets/theme';

const NotificationCounter = ({ className, count, theme: { base: { spacing, colors, font } } }) => (
  <CounterCircle className={className} color={colors.secondary} sizes={spacing.padding}>
    <Text message={count} size={font.size.sm} color="white" weight="bold" />
  </CounterCircle>
);

const CounterCircle = styled.div`
  ${({ sizes, color }) =>
    css`
      height: ${sizes.md}px;
      width: ${sizes.md}px;
      background: ${color};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
    `};
`;

NotificationCounter.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string,
  theme: PropTypes.object,
};

NotificationCounter.defaultProps = {
  theme: Theme,
};

export default NotificationCounter;
