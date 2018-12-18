import styled, { css, withTheme } from 'styled-components';
import Theme from 'assets/theme'; // eslint-disable-line
import { removeFeatureOrProp } from '../../../helpers/';

const validStatus = status => status === 'success' || status === 'error' || status === 'warning';

const StatusIndicatorIcon = styled.span`
  ${({ theme, filled, hasStatus: { type }, status }) => {
    if (status) {
      removeFeatureOrProp('status', 'prop', 'StatusIndicatorIcon', '', "'hasStatus' prop");
    }
    const { colors } = theme.base;
    const { inputStyles, inputStyles: { spacing } } = theme;
    const statusColor = type === 'info' ? 'secondary' : type;
    return css`
      display: inline-block;
      border-radius: 50%;
      height: ${spacing.padding.sm}px;
      width: ${spacing.padding.sm}px;
      border: 1px solid ${validStatus(statusColor) ? colors[statusColor] : inputStyles.colors.icon};
      background: ${filled ? colors[statusColor] : 'transparent'};
    `;
  }};
`;

StatusIndicatorIcon.defaultProps = {
  theme: Theme,
};

export default withTheme(StatusIndicatorIcon);
