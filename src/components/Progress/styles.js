import styled from 'styled-components';

import Icon from '../Icon';
import Text from '../Text';
import StatusIcon from '../Icon/StatusIcon';

import { getStatusColor } from './helpers';
import Media from 'assets/theme/media';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 25em;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const ProgressOutline = styled.div`
  ${Media.md`
    border: 1px solid ${props => getStatusColor(props.status, props.theme)}
  `};
  border-radius: 20px;
  line-height: 0;
  flex-grow: 1;
`;

export const InlineDisplay = styled.span`
  margin-left: 1em;
`;

export const PositionedIcon = styled(StatusIcon)`
  top: 2px;
  position: relative;
`;

export const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  max-width: ${props => props.size}em;
`;

export const CirclePositionedIcon = styled(Icon)`
  position: absolute;
`;

export const CirclePositionedText = styled(Text)`
  position: absolute;
`;
