import styled, { css } from 'styled-components';
import Dropzone from 'react-dropzone';
import Text from '../../../components/Text';
import Icon from '../../../components/Icon';
import Media from 'assets/theme/media';

export const Drop = styled(Dropzone)`
  width: auto;
  height: auto;
  border-width: 0;
  border-color: transparent;
  border-style: none;
  border-radius: 0;
`;

export const DropContents = styled.div`
  ${({ theme: { inputStyles, uiStyles }, dragOver, reject }) =>
    css`
      width: 100%;
      border: 1px dashed ${inputStyles.colors.border};
      min-height: 7em;
      padding: ${inputStyles.spacing.padding.lg}px 0;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      transition: ${uiStyles.transitionAll};
      ${dragOver && 'box-shadow: 0 5px 10px 5px rgba(125,125,125,0.1)'};
      ${dragOver && reject && 'cursor: not-allowed'};
      background-color: ${inputStyles.colors.backgroundClear};
    `};
`;

export const TextWithMargin = styled(Text)`
  margin: 0.3em 0;
`;

export const PreviewList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  width: 70%;
`;

export const FilePreviewContainer = styled.li`
  list-style: none;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
`;

export const FilePreviewContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  max-width: 25em;
`;

const FilePreviewCircleBase = styled.div`
  height: 3em;
  width: 3em;
  ${Media.md`
    width: 4em;
    height: 4em;
  `};
  margin: 1em;
  border-radius: 50%;
  box-shadow: ${props => props.theme.uiStyles.boxShadow};
`;

export const DocumentFilePreview = FilePreviewCircleBase.extend`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageFilePreview = FilePreviewCircleBase.extend`
  background-size: auto 100%;
  background-position: center;
  background-image: url(${props => props.imagePreview});
`;

export const RemoveFileIcon = styled(Icon)`
  cursor: pointer;
  transition: ${props => props.theme.uiStyles.transitionAll};
  margin-left: 1em;

  :hover {
    transform: scale(1.2);
  }
`;
