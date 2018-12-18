import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import fr from 'rc-pagination/lib/locale/fr_FR';

import { messageShape } from '../../propTypes';

import Icon from '../Icon';
import { StyledPagination, Wrapper, PageSizeControl } from './styles';
import Theme from 'assets/theme'; // eslint-disable-line

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: this.props.currentPage,
      pageSize: this.props.pageSize,
    };
  }

  handleChange = page => {
    this.props.navigateTo(page - 1);
    this.setState({ currentPage: page });
  };

  handlePageSizeChange = e => {
    const { value } = e.target;
    const localValue = Number(value);
    const { onPageSizeChange, dataLength } = this.props;

    if (isNaN(localValue)) {
      this.setState({ pageSize: dataLength });
      if (onPageSizeChange) {
        onPageSizeChange(dataLength);
      }
      return;
    }

    this.setState({ pageSize: localValue });
    if (onPageSizeChange) {
      onPageSizeChange(localValue);
    }
  };

  textItemRender = (current, type, element, theme) => {
    if (type === 'next' || type === 'prev') {
      const iconPath = type === 'prev' ? 'chevronLeft' : 'chevronRight';
      return <Icon path={iconPath} color={theme.base.colors.labelGrey} size={16} />;
    }
    if (type === 'page') {
      return element;
    }
    return false;
  };

  render() {
    const { dataLength, locale, className, showQuickJumper, pageSizeOptions, pageSizePlaceholder, theme } = this.props;
    const { pageSize, currentPage } = this.state;

    return (
      <Wrapper className={className}>
        <StyledPagination
          itemRender={(current, type, element) => this.textItemRender(current, type, element, theme)}
          showTitle={false}
          current={currentPage}
          pageSize={Number(pageSize)}
          total={dataLength}
          onChange={this.handleChange}
          locale={locale}
          showQuickJumper={showQuickJumper}
          showSizeChanger={false}
          theme={theme}
        />
        {pageSizeOptions && (
          <PageSizeControl
            onChange={this.handlePageSizeChange}
            pageSizeOptions={pageSizeOptions}
            pageSizePlaceholder={pageSizePlaceholder}
            pageSize={pageSize}
            theme={theme}
          />
        )}
      </Wrapper>
    );
  }
}

Pagination.defaultProps = {
  currentPage: 1,
  locale: fr,
  pageSizePlaceholder: 'Entries per page',
  theme: Theme,
};

Pagination.propTypes = {
  dataLength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  pageSize: PropTypes.number,
  className: PropTypes.string,
  pageSizePlaceholder: messageShape,
  showQuickJumper: PropTypes.bool,
  navigateTo: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func,
  locale: PropTypes.shape({
    items_per_page: PropTypes.string,
    jump_to: PropTypes.string,
    page: PropTypes.string,
    prev_page: PropTypes.string,
    next_page: PropTypes.string,
    prev_5: PropTypes.string,
    next_5: PropTypes.string,
    prev_3: PropTypes.string,
    next_3: PropTypes.string,
  }),
  theme: PropTypes.object,
};

Pagination.contextTypes = {
  ['__styled-components__next__']: PropTypes.object,
};

export default withTheme(Pagination);
