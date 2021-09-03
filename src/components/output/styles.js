import styled from '@emotion/styled';

import colors from '../../colors';

export const EmptyState = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16vh auto;
  text-align: center;
  font-weight: 600;
`;

export const OutputStl = styled.div`
  width: 50%;
  background: ${colors.whiteDark};
  height: 80%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
`;

export const Container = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }

      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;
