import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import CounterCircle from './CounterCircle';

import Theme from 'assets/theme';

const NotificationCounter = ({ count, onClick, className, theme: { base: { colors } } }) => (
  <Wrapper count={count} onClick={onClick} className={className} highlightColor={colors.secondary}>
    <Icon path="bell" color={count ? colors.primary : colors.midGrey} />
    {count && <PositionedCounter count={count} />}
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  ${({ count, highlightColor }) =>
    count &&
    css`
      cursor: pointer;
      :hover svg {
        stroke: ${highlightColor};
      }
    `};
`;

const PositionedCounter = styled(CounterCircle)`
  position: absolute;
  top: -10px;
  right: -5px;
`;

NotificationCounter.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.object,
};

NotificationCounter.defaultProps = {
  theme: Theme,
};

export default NotificationCounter;
