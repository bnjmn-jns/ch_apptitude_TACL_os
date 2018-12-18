import styled from 'styled-components';
import Card from '../Card';
import Text from '../Text';

export const NotificationCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  max-width: 30em;
  min-width: 12em;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
`;

export const ButtonRow = styled(Row)`
  justify-content: flex-end;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstColumn = styled(Column)`
  margin-right: ${props => props.padding.md}px;
`;

export const Header = styled(Text)`
  margin-bottom: ${props => props.padding.sm}px;
`;

export const Paragraph = styled(Text)`
  line-height: ${props => props.font.leading.lg};
`;

export const X = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
