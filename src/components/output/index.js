import React, { useEffect, useState, useMemo } from 'react';
import Table from './table';

import { Container } from './styles';

const Output = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Material',
        Footer: '',
        columns: [
          {
            Header: 'Porcion',
            accessor: 'id',
            Footer: 'Totales',
          },
          {
            Header: 'Gramos',
            accessor: 'gr',
            Footer: (info) => {
              return <>123</>;
            },
          },
          {
            Header: 'Ley',
            accessor: 'law',
            Footer: (info) => {
              return <>123</>;
            },
          },
          {
            Header: 'Finos',
            accessor: 'fine',
            Footer: (info) => {
              return <>123</>;
            },
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState([]);
  const [skipPageReset, setSkipPageReset] = useState(false);

  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  return (
    <Container>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </Container>
  );
};

export default Output;
