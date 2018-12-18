import { colors } from '../assets/theme';
import styled from 'styled-components';

/* Dark Theme */

export const codeColors = {
  bg: colors.riverBedGrey,
  border: 'none',
  boxShadow: 'none',
  icon: colors.mysticGrey,
  code: colors.mysticGrey,
  link: colors.dodgerBlue,
  keyword: colors.carnation,
  string: colors.shamrock,
  comment: colors.gullGray,
};

export const Wrapper = styled.div`
  display: flex;
  margin: 50px 0 0 0;
  position: relative;
`;

export const CodeBox = styled.div`
  flex-grow: 1;
  background: ${codeColors.bg};
  padding: 20px 55px 20px 30px;
  font-size: 1.1em;
  box-shadow: ${codeColors.boxShadow};
  border: ${codeColors.border};
  border-radius: 5px;
  overflow-x: scroll;

  pre {
    margin: 0;
  }

  .hljs {
    display: block;
    overflow-x: auto;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-section,
  .hljs-link,
  .hljs-number {
    color: ${codeColors.link};
  }

  .hljs-function .hljs-keyword,
  .hljs-built_in {
    color: ${codeColors.keyword};
  }

  .hljs,
  .hljs-subst {
    color: ${codeColors.code};
  }

  .hljs-string,
  .hljs-title,
  .hljs-name,
  .hljs-type,
  .hljs-attribute,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition,
  .hljs-variable,
  .hljs-template-tag,
  .hljs-template-variable {
    color: ${codeColors.string};
  }

  .hljs-comment,
  .hljs-quote,
  .hljs-deletion,
  .hljs-meta {
    color: ${codeColors.comment};
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-title,
  .hljs-section,
  .hljs-doctag,
  .hljs-type,
  .hljs-name,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }
`;

export const Comment = styled.span`
  font-family: monospace;
  color: ${codeColors.comment};
  font-size: 1.1em;
`;

export const Spacer = styled.div`
  margin-bottom: 1em;
`;
