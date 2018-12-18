import React from 'react';
import styled from 'styled-components';
import readMe from '../../README.md';

import { codeColors } from './styles';
import { colors } from '../assets/theme';

const ReadMe = () => <Div dangerouslySetInnerHTML={{ __html: readMe }} />;

const Div = styled.div`
  font-family: Lato;
  font-weight: normal;
  font-size: 1.1em;
  color: ${colors.primary};
  h1 {
    display: none;
  }
  img {
    max-width: 500px;
    display: block;
    margin: 0 auto;
  }
  h2,
  h3 {
    ::after {
      content: '';
      height: 1px;
      background: ${codeColors.code};
      display: block;
    }
    margin-top: 40px;
  }
  h2 {
    &:first-of-type {
      margin-top: 0px;
    }
    ::after {
      width: 100%;
    }
  }
  h3 {
    &:first-of-type {
      margin-top: 32px;
    }
    ::after {
      width: 70%;
    }
  }
  h4,
  p {
    margin-left: 12px;
  }
  p,
  li {
    font-size: 13px;
  }
  code {
    font-size: 13px;
    padding: 3px 10px;
    margin: 0 3px;
    border-radius: 3px;
    background: ${codeColors.code};
    color: ${codeColors.bg};
    position: relative;
    top: -1px;
  }
  a {
    text-decoration: none;
    color: ${colors.secondary};
    :hover {
      color: ${colors.secondaryDark};
    }
  }
  ul {
    list-style-type: circle;

    li {
      margin: 15px 0;
      p {
        margin: 0;
      }
      ul {
        padding-left: 15px;
      }
      h2 {
        margin-top: 3em;
      }
    }
  }
`;

export default ReadMe;
