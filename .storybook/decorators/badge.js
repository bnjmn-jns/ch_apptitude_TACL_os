import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../src/components/Text';
import Card from '../../src/components/Card';
import Icon from '../../src/components/Icon';

import Theme from '../../src/assets/theme';

const { colors } = Theme.base;

export const Badge = ({ type, title, message, className }) => {
  const color = colors[type];
  const iconPath = type === 'info' || type === 'success' ? 'alertInfo' : 'alertWarning';

  return (
    <Div>
      <StyledCard className={className} color={color}>
        <StyledIcon path={iconPath} color="white" iconType="fill" size={16} hasTitle={!!title} />
        <Text tag="p" weight="bold" size={Theme.base.font.size.md} color="white" message={title} />
        {message && <Text tag="p" weight="bold" size={Theme.base.font.size.md} color="white" message={': '} />}
        <Text tag="p" size={Theme.base.font.size.md} color="white" message={message} />
      </StyledCard>
    </Div>
  );
};

const Div = styled.div`
  margin-bottom: 1em;
`;

const StyledIcon = styled(Icon)`
  ${props => props.hasTitle && `margin-right: 8px;`};
`;

const StyledCard = styled(Card)`
  padding: 8px;
  display: inline-flex;
  background-color: ${props => props.color};
`;

Badge.propTypes = {
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
};
