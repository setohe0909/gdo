import React from 'react'

import { ArrayTotal } from './styles'

const Total = ({ data }) => {
  return (
    <ArrayTotal>
      <span>Total</span>
      <div>{+data.gr.toFixed(2)}</div>
      <div>{+data.fine.toFixed(2)} </div>
      <div>{+data.law.toFixed(2)} </div>
    </ArrayTotal>
  )
}

export default Total
