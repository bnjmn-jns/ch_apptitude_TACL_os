import styled, { css } from 'styled-components';
import Text from '../Text';

export const Step = styled.button`
  ${({ theme: { inputStyles, uiStyles, base }, direction }) => {
    return css`
      background-color: transparent;
      height: 40px;
      min-width: 40px;
      border: solid 1px ${inputStyles.colors.border};
      border-radius: ${base.borderRadius.xl}px;
      align-items: center;
      justify-content: center;
      display: flex;
      cursor: default;
      transition: ${uiStyles.transitionAll};
      ${direction === 'vertical' &&
        css`
          max-width: 50px;
        `};
      .label {
        color: ${inputStyles.colors.icon};
        font-size: 18px;
      }
      :focus {
        ${uiStyles.focusStyle};
      }
    `;
  }};
`;

export const StepSuccess = Step.extend`
  ${({ theme: { uiStyles }, theme: { inputStyles } }) =>
    css`
      border: solid 1px ${inputStyles.colors.highlight};
      cursor: pointer;
      ${Label} {
        color: ${inputStyles.colors.highlight};
      }
      :focus,
      :hover {
        ${uiStyles.focusStyle};
      }
    `};
`;

export const StepError = Step.extend`
  ${props =>
    css`
      border: solid 1px ${props.color};
      cursor: pointer;

      .label {
        color: ${props.color};
      }
    `};
`;

export const HorizontalLine = styled.div`
  ${props =>
    css`
      height: 1px;
      flex: 1;
      min-width: 15px;
      background-color: ${props.color};
      margin: 0 8px;
    `};
`;

export const VerticalLine = styled.div`
  ${props =>
    css`
      min-height: 35px;
      width: 1px;
      background-color: ${props.color};
      margin: 8px 0;
      left: 25px;
      position: relative;
    `};
`;

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StepsWrapper = styled.div`
  ${({ direction, rtl }) =>
    css`
      display: flex;
      flex-direction: ${getStepsDirection(rtl, direction)};
      align-items: ${direction === 'vertical' ? 'flex-start' : 'center'};
    `};
`;

export const Label = styled(Text)`
  padding: 0 ${props => props.theme.base.spacing.padding.md}px;
  display: flex;
  align-items: center;
`;

const getStepsDirection = (rtl, direction) => {
  if (direction === 'vertical') {
    return 'column';
  }
  return rtl ? 'row-reverse' : 'row';
};
