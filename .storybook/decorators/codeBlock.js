import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import CopyToClipboardButton from './CopyToClipboardButton';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { Wrapper, CodeBox, Comment } from './styles';
// import prettier from 'prettier';

import { codeColors } from './styles';

const jsxStringOptions = {
  showDefaultProps: false,
  showFunctions: false,
};

export const RenderCodeExample = ({ component, copyButton, comment, children }) => {
  let componentCode = children ? children : component;

  return (
    <Wrapper>
      <CodeBox>
        <Highlight className="jsx">
          {React.isValidElement(componentCode) ? reactElementToJSXString(componentCode, jsxStringOptions) : componentCode}
        </Highlight>
        {comment && <Comment> /* {comment} */ </Comment>}
      </CodeBox>
      {copyButton && <CopyToClipboardButton copyText={reactElementToJSXString(componentCode, jsxStringOptions)} />}
    </Wrapper>
  );
};

RenderCodeExample.defaultProps = {
  copyButton: true,
};

RenderCodeExample.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  copyButton: PropTypes.bool,
};
