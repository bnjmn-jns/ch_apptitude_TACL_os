import styled from 'styled-components';
import Card from '../Card';
import Text from '../Text';

export const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
`;

export const PositionedText = styled(Text)`
  margin-left: ${props => props.theme.base.spacing.padding.md}px;
`;
