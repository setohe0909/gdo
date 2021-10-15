import React from 'react'
import { useAtom } from 'jotai'

import { grAtom } from '../../atoms'

import Table from './table'


import { Container, OutputStl, EmptyState} from './styles'
import Total from './total'

const Output = () => {
  const columns = [
    {
      name: 'Porcion',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Gramos',
      selector: 'gr',
      sortable: true,
    },
    {
      name: 'Ley',
      selector: 'law',
      sortable: true,
    },
    {
      name: 'Finos',
      selector: 'fine',
      sortable: true,
    },
   
  ]

  const [data] = useAtom(grAtom.dataInfo)
  const [dataTotal] = useAtom(grAtom.totals)
  const [lawTotal]=useAtom(grAtom.totalLaw)

  return (
    <OutputStl>
      {data.length === 0 ? (
        <EmptyState>
          Por favor diligenciar la informacion para obtener los resultados
        </EmptyState>
      ) : (
        <>
          <Container>
              <Table columns={columns} data={data} />
              <Total data={dataTotal} lawt={lawTotal }/>
          </Container>
        </>
      )}
    </OutputStl>
  )
}

export default Output
