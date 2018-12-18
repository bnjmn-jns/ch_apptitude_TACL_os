import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dropdown from '../';
import Text from '../../Text';
import StatusIndicatorIcon from '../../StatusIndicator/StatusIndicatorIcon';

const StatusDropdown = props => {
  const { successOption, warningOption, errorOption, className } = props;
  const statusItem = (statusType, message) => (
    <StatusItemContainer>
      <PaddedStatusIndicatorIcon hasStatus={{ type: statusType }} />
      <Text color="inherit" cursor="pointer" message={message} />
    </StatusItemContainer>
  );

  return (
    <Dropdown
      placeholder={statusItem(null, props.placeholder)}
      className={className}
      contents={[
        { label: statusItem('success', successOption), key: 1, value: successOption },
        { label: statusItem('warning', warningOption), key: 2, value: warningOption },
        { label: statusItem('error', errorOption), key: 3, value: errorOption },
      ]}
    />
  );
};

const StatusItemContainer = styled.span`
  display: flex;
  align-items: center;
`;
const PaddedStatusIndicatorIcon = styled(StatusIndicatorIcon)`
  margin-right: 8px;
`;

StatusDropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  successOption: PropTypes.string,
  warningOption: PropTypes.string,
  errorOption: PropTypes.string,
  className: PropTypes.string,
};

export default StatusDropdown;
