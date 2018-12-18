import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ReactTable from 'react-table';

import Icon from '../Icon';
import Loader from '../Loader';
import Pagination from '../Pagination';

const StyledTable = styled(ReactTable)`
  ${({ loading, data, theme: { inputStyles, base, uiStyles } }) =>
    css`
      border: none !important;

      .rt-table.rt-table,
      .pagination-bottom.pagination-bottom {
        transition: opacity 0.2s ease;
        opacity: ${loading || !data ? 0.4 : 1};
        pointer-events: ${loading || !data ? 'none' : 'auto'};
      }

      .rt-thead .rt-th.rt-th,
      .rt-thead .rt-td.rt-td,
      .rt-tbody .rt-td.rt-td {
        border-right: none;
      }

      .rt-tr.rt-tr {
        padding: 1em 0;
      }

      .rt-th.rt-th {
        color: ${inputStyles.colors.placeholderText};
        text-align: left;
      }

      .widthAuto {
        width: auto !important;
        flex: auto !important;
      }
      .rt-th.rt-th.widthAuto {
        opacity: 0;
        pointer-events: none;
        cursor: default;
      }

      .rt-tbody {
         padding-bottom: 15px;
         
        .rt-tr.rt-tr {
          padding: 2px 0 !important;
        }
        .rt-tr.-even {
          background: ${base.colors.offWhiteGrey};
        }

        overflow: hidden !important;

        .rt-tr-group,
        .rt-tr {
          color: ${base.colors.primary};

          & * {
            color: ${base.colors.primary};
          }

          & .link {
            color: ${base.colors.secondary};
            cursor: pointer;
          }

          .rt-td.onHover {
            opacity: 0;
          }
          .rt-td.hidden {
            padding: 0;
          }

          .rt-td {
            display: flex;
            align-items: center;
          }

          &:hover,
          &:active,
          &:hover *,
          &:active * {
            color: ${inputStyles.colors.placeholderText};
            background-color: transparent !important;

            .rt-td.onHover {
              opacity: 1;
            }
          }
        }
      }

      .rt-noData.rt-noData {
        background: ${base.colors.background};
        font-family: ${base.font.family};
        font-size: 1.2em;
        box-shadow: ${uiStyles.boxShadow};
      }

      .rt-thead.-header.rt-thead.-header {
        box-shadow: none !important;
        border-bottom: 1px solid ${inputStyles.colors.border};
      }
    `};
`;

export const HeaderSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em 0 0;
`;

export const TableLoader = styled(Loader)`
  position: relative;
  top: -20em;
  display: flex;
  background: white;
  box-shadow: 0px 0px 10px #f7f7f7;
  align-items: center;
  justify-content: center;
  padding: 1em;
  box-sizing: content-box !important;
`;

export const StyledPagination = styled(Pagination)`
  justify-content: center;
  margin-top: ${props => props.theme.inputStyles.spacing.padding.md}px;
`;

export const DescIcon = ({ colors }) => <Icon path="chevronDown" color={colors.highlight} size={16} />;
export const AscIcon = ({ colors }) => <Icon path="chevronUp" color={colors.highlight} size={16} />;
export const SortIcon = ({ colors }) => <Icon path="chevronDown" color={colors.icon} size={16} />;

const iconPropTypes = {
  colors: PropTypes.object,
};

DescIcon.propTypes = iconPropTypes;
AscIcon.propTypes = iconPropTypes;
SortIcon.propTypes = iconPropTypes;

export default StyledTable;
