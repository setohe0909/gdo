import React from 'react'
import { withRouter } from 'react-router'
import {Divweight, Divinput1, Divinput2, Divinput3, Divinput4, Btnresult} from './styles'

const MainContainer = ({ history }) => {
  const search = url => {
    history.push(url)
  }
  return (
    <>
      <div>
        <div>
          <h1>Material</h1>
          <div className='container'>
            <Divweight>
              <label>Peso Bruto:</label>
              <Divinput1>
              <input type='number' placeholder='Ingrese el Peso Bruto' />
              </Divinput1>
            </Divweight>
            <Divweight>
              <label>Ley:</label>
              <Divinput2>
              <input type='number' placeholder='Ingrese Ley' />
              </Divinput2>
            </Divweight>
            <Divweight>
              <label>Finos:</label>
              <Divinput3>
              <input type='number' placeholder='Ingrese finos' />
              </Divinput3>
            </Divweight>
          </div>
        </div>
        <div>
          <h1>Rango de peso</h1>
          <div className='container'>
            <Divweight>
              <label>Peso inicial:</label>
              <Divinput1>
              <input type='number' placeholder='Ingrese el Peso Bruto' />
              </Divinput1>
            </Divweight>
            <Divweight>
              <label>Peso final:   </label>
              <Divinput4>
              <input type='number' placeholder='Ingrese Ley' />
              </Divinput4>
            </Divweight>
          </div>
        </div>
        <Btnresult type='button' onClick={() => search('/')}>
          Obtener resultados
        </Btnresult>
      </div>
    </>
  )
}

export default withRouter(MainContainer)
