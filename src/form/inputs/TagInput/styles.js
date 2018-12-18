import styled, { css } from 'styled-components';
import { baseInputStyle } from '../styles';
import Button from '../../../components/Button';
import Text from '../../../components/Text';

export const InputWrapper = styled.div`
  ${({ theme: { inputStyles, uiStyles, rtl }, hasStatus, focused }) => {
    return css`
      ${baseInputStyle(inputStyles, hasStatus, false, rtl)};
      ${focused && uiStyles.focusStyle};
      display: flex;
      padding: 0;
      height: auto;
    `;
  }};
`;

export const StyledInput = styled.input`
  ${({ spacing }) =>
    css`
      border: 0;
      padding: 0 ${spacing.padding.sm}px;
      margin: ${spacing.padding.sm}px;
      height: ${spacing.height}px;
      flex-grow: 1;

      :focus {
        outline: none;
      }
    `};
`;

export const IconContainer = styled.div`
  ${({ spacing }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${spacing.padding.md}px;
      cursor: pointer;
    `};
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
`;

export const TagButton = styled(Button)`
  margin: ${({ spacing }) => spacing.padding.sm}px;
`;

export const PositionedText = styled(Text)`
  margin-left: ${({ spacing }) => spacing.padding.sm}px;
`;
