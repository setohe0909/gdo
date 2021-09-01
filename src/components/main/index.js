import React, { useState } from 'react'
import { withRouter } from 'react-router'

import {
  Divweight,
  Divinput1,
  Divinput2,
  Divinput3,
  Divinput4,
  Btnresult,
  InputCustom,
  ErrorMSg
} from './styles'

const MainContainer = ({ history }) => {
  const [grossWeight, setGrossWeight] = useState('')
  const [law, setLaw] = useState('')
  const [fine, setFine] = useState('')
  const [initWeight, setInitWeight] = useState('')
  const [lastWeight, setLastWeight] = useState('')
  const [isError, setIsError] = useState(false)

  // const search = (url) => {
  //   history.push(url);
  // };

  const validate = () => {
    if (
      grossWeight === '' &&
      law === '' &&
      fine === '' &&
      initWeight === '' &&
      lastWeight === ''
    ) {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }

  return (
    <div>
      {isError ? (
        <ErrorMSg>Todos los campos son obligatorios</ErrorMSg>
      ) : (
        'Campos diligenciados'
      )}
      <div>
        <h1>Material</h1>
        <div className='container'>
          <Divweight>
            <label>Peso Bruto:</label>
            <Divinput1>
              <InputCustom
                onChange={e => setGrossWeight(e.target.value)}
                type='number'
                placeholder='Ingrese el Peso Bruto'
              />
            </Divinput1>
          </Divweight>
          <Divweight>
            <label>Ley:</label>
            <Divinput2>
              <InputCustom
                onChange={e => setLaw(e.target.value)}
                type='number'
                placeholder='Ingrese Ley'
              />
            </Divinput2>
          </Divweight>
          <Divweight>
            <label>Finos:</label>
            <Divinput3>
              <InputCustom
                onChange={e => setFine(e.target.value)}
                type='number'
                placeholder='Ingrese finos'
              />
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
              <InputCustom
                onChange={e => setInitWeight(e.target.value)}
                type='number'
                placeholder='Ingrese el Peso Bruto'
              />
            </Divinput1>
          </Divweight>
          <Divweight>
            <label>Peso final: </label>
            <Divinput4>
              <InputCustom
                onChange={e => setLastWeight(e.target.value)}
                type='number'
                placeholder='Ingrese Ley'
              />
            </Divinput4>
          </Divweight>
        </div>
      </div>
      <Btnresult type='button' onClick={() => validate()}>
        Obtener resultados
      </Btnresult>
    </div>
  )
}

export default withRouter(MainContainer)
