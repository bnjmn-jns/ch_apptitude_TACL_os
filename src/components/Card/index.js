import styled, { css, withTheme } from 'styled-components';
import Theme from 'assets/theme';

const Card = styled.div`
  ${({ theme }) => {
    const { uiStyles, base } = theme;
    const { colors, spacing } = base;
    return css`
      padding: ${spacing.padding.md}px;
      border-radius: ${base.borderRadius.md}px;
      background-color: ${colors.background};
      box-shadow: ${uiStyles.boxShadow};
      display: flex;
    `;
  }};
`;

Card.defaultProps = {
  theme: Theme,
};

export default withTheme(Card);
