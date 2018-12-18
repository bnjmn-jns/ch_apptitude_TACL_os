import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ disabled, theme }) => {
    const { height } = theme.inputStyles.spacing;
    const { focusStyle } = theme.uiStyles;
    return css`
      display: inline-flex;
      align-items: center;
      height: ${height - 2}px;
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      opacity: ${disabled ? 0.5 : 1};
      :focus {
        outline: none;
        div.left,
        div.right {
          ${focusStyle};
        }
      }
    `;
  }};
`;

const PillPart = styled.div`
  ${({ theme }) => {
    const { colors, spacing } = theme.inputStyles;
    return css`
      font-size: 12px;
      border: 1px solid ${colors.border};
      padding: ${spacing.padding.sm}px ${spacing.padding.md}px;
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      height: 100%;
      transition: border 0.5s ease;
    `;
  }};
`;

export const Left = styled(PillPart)`
  ${({ theme, disabled }) => {
    const { buttonStyles, inputStyles: { colors } } = theme;
    return css`
      border-radius: ${buttonStyles.borderRadius}px 0 0 ${buttonStyles.borderRadius}px;
      outline: none;
      background: ${colors.backgroundClear};
      :focus,
      :focus + .right {
        ${!disabled && `border: 1px solid ${colors.highlight}`};
      }
    `;
  }};
`;

export const Right = styled(PillPart)`
  ${({ theme, disabled }) => {
    const { inputStyles, buttonStyles: { borderRadius } } = theme;
    const { spacing: { padding }, colors } = inputStyles;
    return css`
      background: ${colors.backgroundClear};
      width: ${inputStyles.spacing.height}px;
      border-radius: 0 ${borderRadius}px ${borderRadius}px 0;
      margin-left: -1px;
      padding: ${padding.sm}px;
      outline: none;

      :hover {
        background-color: ${disabled ? colors.background : colors.backgroundDisabled};
      }

      div {
        position: relative;
        right: 2px;
      }
    `;
  }};
`;
