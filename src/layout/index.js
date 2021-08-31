import React from 'react'
import { Containermain } from './styles'

const MainLayout = ({ children }) => {
  return (
    <Containermain className='test'>
      <div>{children}</div>
    </Containermain>
  )
}

export default MainLayout
