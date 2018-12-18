import React from 'react';
import Text from '../components/Text';

export const intlFormatMessage = (intl, message) => {
  if (typeof message === 'object' && message.id) {
    return intl.formatMessage(message);
  }
  return message;
};

export const wrapInTextComponent = (message, textProps) => {
  let content = message;
  if ((typeof content === 'object' && content.id) || typeof content === 'string' || typeof content === 'number') {
    content = <Text tag={textProps.tag || 'span'} message={content} {...textProps} />;
  }
  return content;
};
