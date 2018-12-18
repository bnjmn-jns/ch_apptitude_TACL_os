import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Theme from 'assets/theme';

import Icon from '../Icon';
import NotificationIcon from './icon';

import { NotificationCard, Row, ButtonRow, Column, FirstColumn, Header, Paragraph, X } from './styles';

const Notification = ({ header, message, body, hasIcon, actionButtons, dismissNotification, theme, className }) => {
  const { font } = theme.base;
  const { padding } = theme.base.spacing;
  return (
    <NotificationCard className={className}>
      <Row>
        {hasIcon && (
          <FirstColumn padding={padding}>
            <NotificationIcon />
          </FirstColumn>
        )}
        <Column>
          <Header tag="h3" size={font.size.lg} message={header} block padding={padding} />
          {message && <Paragraph tag="p" size={font.size.md} message={message} font={font} />}
          {body && body}
        </Column>
        <Column>
          <X onClick={dismissNotification}>
            <Icon path="x" size={15} />
          </X>
        </Column>
      </Row>
      {actionButtons && <ButtonRow>{actionButtons}</ButtonRow>}
    </NotificationCard>
  );
};

Notification.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
    PropTypes.string,
  ]),
  message: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
    PropTypes.string,
  ]),
  body: PropTypes.node,
  hasIcon: PropTypes.bool,
  dismissNotification: PropTypes.func,
  actionButtons: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  theme: PropTypes.object,
};

Notification.defaultProps = {
  theme: Theme,
};

export default withTheme(Notification);
