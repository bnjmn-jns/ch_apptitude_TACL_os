import styled, { css } from 'styled-components';
import Pill from '../Pill';

export const PillShape = styled(Pill)`
  ${({ theme, focused }) => {
    const { spacing, colors } = theme.inputStyles;
    return css`
      .left {
        cursor: text;
        padding: 0 ${spacing.padding.sm}px;
        ${focused && `border-color: ${colors.highlight}`};
      }
      .right {
        cursor: pointer;
        outline: none;
        width: ${spacing.height}px;
        display: flex;
        justify-content: center;
        padding: 0;
        ${focused && `border-color: ${colors.highlight}`};
        :focus {
          border-color: ${colors.highlight};
        }
      }
    `;
  }};
`;

export const Input = styled.input`
  ${({ theme: { inputStyles }, theme: { buttonStyles } }) =>
    css`
      border: none;
      height: 100%;
      background: ${inputStyles.colors.backgroundclear};
      border-radius: ${buttonStyles.borderRadius}px;
      padding: 0 ${inputStyles.spacing.padding.sm}px;
      color: ${inputStyles.colors.inputText};
      font-size: ${inputStyles.fontSize.inputText}px;
      :focus {
        outline: none;
      }
      ::placeholder {
        color: ${inputStyles.colors.placeholderText};
      }
    `};
`;
