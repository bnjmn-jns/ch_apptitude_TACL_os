import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import 'react-table/react-table.css';
import Table, { DescIcon, AscIcon, SortIcon, HeaderSpan, TableLoader as Loader, StyledPagination as Pagination } from './styles';
import Text from '../Text';

import { messageShape } from '../../propTypes';

import Theme from 'assets/theme'; // eslint-disable-line

class DataTable extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      sorted: [],
    };
  }

  getHeaderSortComponent = id => {
    const { theme } = this.props;
    const sortInfo = this.state.sorted.filter(item => item.id === id);
    if (sortInfo.length) {
      if (sortInfo[0].desc === true) return () => <DescIcon colors={theme.inputStyles.colors} />;
      if (sortInfo[0].desc === false) return () => <AscIcon colors={theme.inputStyles.colors} />;
    }
    return () => <SortIcon colors={theme.inputStyles.colors} />;
  };

  wrapTextInTextComponent = col => {
    const { theme } = this.props;
    if (!col.Cell) {
      const c = col;
      c.Cell = props => <Text tag="p" size={theme.base.font.size.md} message={props.value} />;
      return c;
    }
    return col;
  };

  processColumns = columnData =>
    columnData.map(column => {
      const newCol = this.wrapTextInTextComponent(column);
      newCol.Header = props => {
        const SortedIcon = this.getHeaderSortComponent(props.column.id);
        return (
          <HeaderSpan>
            <Text color="inherit" message={column.title} />
            {props.column.sortable && <SortedIcon />}
          </HeaderSpan>
        );
      };
      newCol.headerStyle = { boxShadow: 'none' };

      newCol.className = '';
      newCol.headerClassName = '';
      if (column.onHover) {
        newCol.className += ' onHover';
      }
      if (column.hidden) {
        newCol.className += ' hidden';
      }

      if (column.width === 'auto') {
        newCol.Header = column.Cell;
        newCol.width = 100;
        newCol.className += ' widthAuto';
        newCol.headerClassName += ' widthAuto';
      }
      return newCol;
    });

  getPaginationComponent = (
    { data, page, onPageChange, pageSize, pages: numberOfPages, onPageSizeChange },
    isServerSide,
    pageSizePlaceholder,
  ) => {
    const { showPaginationQuickJumper, pageSizeOptions, theme } = this.props;

    const totalDataLength = isServerSide ? data.length * numberOfPages : data.length;
    return (
      <Pagination
        dataLength={totalDataLength}
        pageSize={pageSize}
        navigateTo={onPageChange}
        currentPage={page + 1}
        showQuickJumper={showPaginationQuickJumper}
        pageSizeOptions={pageSizeOptions}
        onPageSizeChange={onPageSizeChange}
        pageSizePlaceholder={pageSizePlaceholder}
        theme={theme}
      />
    );
  };

  render() {
    const {
      columns,
      data: dataIn,
      onFetchData,
      loading,
      minRows,
      pages,
      defaultPageSize,
      pageSizePlaceholder,
      withPagination,
      className,
      theme,
      ...rest
    } = this.props;

    const processedColumns = this.processColumns(columns, theme);

    let isServerSide = false;
    let onFetchDataFucntion = () => null;
    if (onFetchData) {
      onFetchDataFucntion = onFetchData;
      isServerSide = true;
    }

    const fullClassName = className ? `-highlight ${className}` : '-highlight';

    return (
      <Table
        LoadingComponent={Loader}
        loading={loading}
        data={dataIn}
        className={fullClassName}
        columns={processedColumns}
        defaultPageSize={defaultPageSize}
        onFetchData={onFetchDataFucntion}
        PaginationComponent={allProps =>
          withPagination ? this.getPaginationComponent(allProps, isServerSide, pageSizePlaceholder) : null
        }
        pages={pages}
        onSortedChange={sorted => this.setState({ sorted })}
        minRows={minRows}
        theme={theme}
        {...rest}
      />
    );
  }
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          defaultMessage: PropTypes.string.isRequired,
        }),
      ]),
      accessor: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
      resizable: PropTypes.bool,
      Cell: PropTypes.func,
      width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string, // only auto
      ]),
    }),
  ),
  data: PropTypes.array.isRequired,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  defaultPageSize: PropTypes.number,
  pageSizePlaceholder: messageShape,
  minRows: PropTypes.number,
  pages: PropTypes.number,
  onFetchData: PropTypes.func,
  loading: PropTypes.bool,
  withPagination: PropTypes.bool,
  showPaginationQuickJumper: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.object,
};

DataTable.defaultProps = {
  maxPageSize: 15,
  defaultPageSize: 15,
  minRows: 7,
  withPagination: true,
  theme: Theme,
};

export default withTheme(DataTable);
