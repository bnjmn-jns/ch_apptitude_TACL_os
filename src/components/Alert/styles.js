import styled, { css } from 'styled-components';
import Text from '../Text';

export const StyledCard = styled.div`
  ${({ theme: { base }, type }) => {
    const { padding } = base.spacing;
    const paddingXs = padding.sm / 2;
    return css`
      padding: ${padding.sm + paddingXs}px ${padding.md}px;
      border-radius: ${base.borderRadius.md}px;
      background-color: white;
      border: 1px solid ${type !== 'info' ? base.colors[type] : base.colors.secondary};
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;
  }};
`;

export const PositionedText = styled(Text)`
  margin-left: ${props => props.theme.base.spacing.padding.md}px;
  flex-grow: 1;
`;

export const X = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;
