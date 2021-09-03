import React, { useState, useMemo } from 'react';
import { useAtom } from 'jotai';

import { grAtom } from '../../atoms';

import Table from './table';

import { Container, OutputStl, EmptyState } from './styles';

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

  const [data, setData] = useAtom(grAtom.dataInfo);
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
    <OutputStl>
      {data.length === 0 ? (
        <EmptyState>
          Por favor diligenciar la informacion para obtener los resultados
        </EmptyState>
      ) : (
        <>
          <Container>
            <Table
              columns={columns}
              data={data}
              updateMyData={updateMyData}
              skipPageReset={skipPageReset}
            />
          </Container>
        </>
      )}
    </OutputStl>
  );
};

export default Output;
