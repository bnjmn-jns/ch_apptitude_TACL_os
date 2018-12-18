import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Text from '../../../../components/Text';
import { IconButton } from '../../../../components/Button/variants';
import InputWrapper from '../../InputWrapper';

import { messageShape } from '../../../../propTypes';
import Theme from 'assets/theme';

import { formatBytes, FileTypeIsImage as fileTypeIsImage } from '../helpers';
import {
  Wrapper,
  Block,
  VerticalBlock,
  MiddleBlock,
  PreviewImg,
  PreviewDoc,
  PositionedInputWrapper,
  PaddedInputWrapper,
  StyledWrapperActions,
  StyledSelect as Select,
  ValidFileIcon,
  PositionedErrorText,
  PositionedSyncdIcon as SyncdFileIcon,
  PositionedIconButton,
} from './styles';

const FileManagerItem = ({
  file,
  maxFileSize,
  onEdit,
  onDelete,
  docTypes,
  docTypeValue,
  messages,
  hasStatus,
  onChange,
  index,
  className,
  isSyncd,
  theme,
  action,
}) => {
  const fileIsTooBig = () => maxFileSize && file.size > maxFileSize;
  const isValid = () => {
    const docTypeIsSelected = !!docTypeValue || !Array.isArray(docTypes);
    const hasErrorStatus = hasStatus && hasStatus.type !== 'success' && !docTypeIsSelected;
    return !fileIsTooBig() && docTypeIsSelected && !hasErrorStatus;
  };
  const { inputStyles: { colors, fontSize } } = theme;

  return (
    <Wrapper className={className} inputStyles={theme.inputStyles}>
      <SyncdFileIcon isSyncd={isSyncd} syncdMessage={messages.syncdMessage} theme={theme} />
      <Block>{fileTypeIsImage(file) ? <PreviewImg imageUrl={file.preview} theme={theme} /> : <PreviewDoc theme={theme} />}</Block>
      <MiddleBlock>
        <PositionedInputWrapper
          theme={theme}
          labelText={messages.name}
          displayStatusIcon={false}
          displayValidationMessage={false}
          displayFormHelper={false}
        >
          <Text message={file.name} color={onEdit ? colors.highlight : colors.placeholderText} />
          {onEdit && (
            <PositionedIconButton icon={{ path: 'edit2', color: colors.highlight }} onClick={() => onEdit(index)} theme={theme} />
          )}
        </PositionedInputWrapper>
        <PaddedInputWrapper
          theme={theme}
          labelText={messages.docType}
          hasStatus={hasStatus}
          displayStatusIcon={false}
          displayFormHelper={false}
        >
          {Array.isArray(docTypes) ? (
            <Select placeholder={messages.placeholder} options={docTypes} onChange={onChange} value={docTypeValue} />
          ) : (
            <Text message={docTypes} color={colors.placeholderText} />
          )}
        </PaddedInputWrapper>
      </MiddleBlock>
      <VerticalBlock>
        <Block>
          <Text
            message={formatBytes({ bytes: file.size, bitUnits: messages.bitUnits })}
            color={fileIsTooBig() ? colors.error : colors.placeholderText}
            noSelect
          />

          <ValidFileIcon isValid={isValid()} theme={theme} />
          <StyledWrapperActions>
            {onDelete && <IconButton icon={{ path: 'x', color: colors.error }} onClick={() => onDelete(index)} />}
            {action}
          </StyledWrapperActions>
        </Block>
        {fileIsTooBig() && (
          <PositionedErrorText size={fontSize.validationText} message={messages.fileTooBig} color={colors.error} theme={theme} />
        )}
      </VerticalBlock>
    </Wrapper>
  );
};

FileManagerItem.propTypes = {
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  docTypes: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]).isRequired,
  file: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.number,
    preview: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func,
  maxFileSize: PropTypes.number,
  docTypeValue: PropTypes.string,
  messages: PropTypes.shape({
    name: messageShape,
    docType: messageShape,
    fileTooBig: messageShape,
    placeholder: messageShape,
    syncdMessage: messageShape,
    bitUnits: PropTypes.arrayOf(PropTypes.string),
  }),
  hasStatus: PropTypes.shape({
    type: PropTypes.oneOf(['error', 'success', 'warning', 'info']),
    message: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        defaultMessage: PropTypes.string.isRequired,
      }),
    ]),
  }),
  className: PropTypes.string,
  isSyncd: PropTypes.bool,
  theme: PropTypes.object,
  action: PropTypes.node,
};

FileManagerItem.defaultProps = {
  messages: {
    name: 'Name',
    docType: 'Document Type',
    fileTooBig: 'File is too large. Please try another',
    placeholder: 'Select',
  },
  theme: Theme,
};

export default withTheme(FileManagerItem);
