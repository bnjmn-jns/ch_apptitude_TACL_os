import styled, { keyframes } from 'styled-components';
import { spinnerBase } from './constants';

const LoaderAnimation = keyframes`
  0%{
    opacity: 0;
    transform: scale(.8);
  }
  40%{
    opacity: 1;
    transform: scale(1);    
  }
  100%{    
    transform: scale(1);     
    opacity: 0
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 0;
  max-width: 8em;
  margin: 0 auto;
`;

export const Dot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  :before {
    content: '';
    width: 13px;
    height: 13px;
    display: block;
    transform: scale(0.5);
    background-color: ${props => props.color};
    border-radius: 100%;
  }

  :nth-child(1) {
    :before {
      animation: ${LoaderAnimation} ${props => props.rate}ms infinite ease-in-out;
    }
  }
  :nth-child(2) {
    :before {
      animation: ${LoaderAnimation} ${props => props.rate}ms infinite 250ms ease-in-out;
    }
  }
  :nth-child(3) {
    :before {
      animation: ${LoaderAnimation} ${props => props.rate}ms infinite 500ms ease-in-out;
    }
  }
`;

const outerSpinnerAnimation = keyframes`
  100%{    
    transform:rotate(360deg);
  }
`;

const innerSpinnerAnimation = keyframes`
  0%{    
    stroke-dashoffset: ${spinnerBase};
  }
  50%{    
    stroke-dashoffset: 100;
  }
  100%{    
    stroke-dashoffset: ${spinnerBase};
  }
`;

const size = props => (props.size ? `${props.size}px` : '100%');

export const SpinnerContainer = styled.div`
  height: ${size};
  width: ${size};
  animation: ${outerSpinnerAnimation} ${props => props.rate * 1.5}ms ease-in-out infinite;
  animation-fill-mode: ${props => (props.rtl ? 'backwards' : 'forwards')};

  svg {
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: ${spinnerBase * 6};
    stroke-dashoffset: ${spinnerBase};
    animation: ${innerSpinnerAnimation} ${props => props.rate * 1.5}ms infinite;
    animation-fill-mode: both;
  }
`;
