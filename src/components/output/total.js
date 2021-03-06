import React from 'react';

import { ArrayTotal } from './styles';

const Total = ({ data, lawt }) => {
  return (
    <ArrayTotal>
      <span>Total:</span>
      <div>{+data.gr.toFixed(3)}</div>
      <div>{+lawt} </div>
      <div>{+data.fine.toFixed(3)} </div>
    </ArrayTotal>
  );
};

export default Total;
