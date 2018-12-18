import styled, { css } from 'styled-components';
import StatusIcon from '../Icon/StatusIcon';
import RCTabs from 'rc-tabs';

export const StyledTabs = styled(RCTabs)`
  ${({ theme }) => {
    const { font, colors } = theme.base;
    return css`
      border-bottom: 0 !important;

      .rc-tabs-content {
        margin-top: 30px;
      }
      .rc-tabs-tab.rc-tabs-tab {
        font-family: ${font.family};
        padding: 15px 0;
        margin-right: 40px;
        font-weight: normal;
      }

      .rc-tabs-tab-active.rc-tabs-tab-active,
      .rc-tabs-tab:hover {
        color: ${colors.secondary};
      }

      .rc-tabs-bar.rc-tabs-bar {
        border-bottom: 1px solid ${colors.lightGrey};
      }
      .rc-tabs-ink-bar {
        background-color: ${props => getActiveTabStatusColor(props.tabs, props.activeKey, colors)};
      }

      .rc-tabs-tab-arrow-show {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .rc-tabs-tab-prev-icon,
      .rc-tabs-tab-next-icon {
        font-family: ${font.family};
        color: ${colors.secondary};
      }
    `;
  }};
`;

export const CenteredBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const PaddedStatusIcon = styled(StatusIcon)`
  position: absolute;
  right: -20px;
`;

const getActiveTabStatusColor = (tabsIn, activeKeyIn, colors) => {
  const activeTab = tabsIn && activeKeyIn && tabsIn.filter(tab => `${tab.id}` === `${activeKeyIn}`)[0];

  if (activeTab && activeTab.hasStatus) {
    return colors[activeTab.hasStatus.type];
  }
  return colors.secondary;
};
