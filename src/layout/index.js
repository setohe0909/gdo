import React from 'react'
import { Containermain, Content} from './styles'

import Output from '../components/output'

const MainLayout = ({ children }) => {
  return (
    <Containermain className='test'>
      <Content>
        {children}
        <Output />
      </Content>
    </Containermain>
  )
}

export default MainLayout
