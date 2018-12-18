import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import 'rc-tabs/assets/index.css';
import { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import { messageShape } from '../../propTypes';
import Text from '../Text';

import { StyledTabs, CenteredBlock, PaddedStatusIcon } from './styles';

import Theme from 'assets/theme'; // eslint-disable-line

const Tabs = ({ className, activeTab, tabs, onChange, tabWillChange, theme }) => (
  <StyledTabs
    className={className}
    defaultActiveKey={`${activeTab}`}
    activeKey={`${activeTab}`}
    renderTabBar={() => <ScrollableInkTabBar />}
    renderTabContent={() => <TabContent />}
    destroyInactiveTabPane
    onChange={onChange}
    tabWillChange={tabWillChange}
    tabs={tabs}
    theme={theme}
  >
    {tabs.map(tab => (
      <TabPane tab={<TabTitle title={tab.title} hasStatus={tab.hasStatus} theme={theme} />} key={tab.id}>
        {tab.content}
      </TabPane>
    ))}
  </StyledTabs>
);

const TabTitle = ({ title, hasStatus, theme }) => {
  const { colors, font } = theme.base;

  return (
    <CenteredBlock>
      <Text {...title} size={font.size.md} color={hasStatus ? colors[hasStatus.type] : colors.secondary} noSelect />
      {hasStatus && <PaddedStatusIcon hasStatus={hasStatus} size={13} />}
    </CenteredBlock>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.shape({
        message: messageShape.isRequired,
      }).isRequired,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
      hasStatus: PropTypes.object,
    }).isRequired,
  ),
  activeTab: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  tabWillChange: PropTypes.func,
  theme: PropTypes.object,
};

TabTitle.propTypes = {
  title: PropTypes.shape({
    message: messageShape.isRequired,
  }).isRequired,
  hasStatus: PropTypes.object,
  theme: PropTypes.object,
};

Tabs.defaultProps = {
  theme: Theme,
};

TabTitle.defaultProps = {
  theme: Theme,
};

export default withTheme(Tabs);
