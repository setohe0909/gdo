import React from 'react';
import DataTable from 'react-data-table-component';

const Table = ({ columns, data }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      highlightOnHover
      noHeader
      striped
    />
  );
};

export default Table;
