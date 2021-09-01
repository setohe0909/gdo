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
  const [message, setMessage] = useState('')

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
      setMessage('Todos los campos son obligatorios')
    } else {
      setIsError(false)
    }
  }

  const inputFl = (e, func) => {
    e.preventDefault()
    const number = +e.target.value

    if (number >= 0) {
      setIsError(false)
      setMessage('')
      func(e.target.value)
    } else {
      setIsError(true)
      setMessage('Formato no válido')
    }
  }

  return (
    <div>
      {isError ? (
        <ErrorMSg>{message}</ErrorMSg>
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
                onChange={e => inputFl(e, setGrossWeight)}
                type='number'
                placeholder='Ingrese el Peso Bruto'
              />
            </Divinput1>
          </Divweight>
          <Divweight>
            <label>Ley:</label>
            <Divinput2>
              <InputCustom
                onChange={e => inputFl(e, setLaw)}
                type='number'
                placeholder='Ingrese Ley'
              />
            </Divinput2>
          </Divweight>
          <Divweight>
            <label>Finos:</label>
            <Divinput3>
              <InputCustom
                onChange={e => inputFl(e, setFine)}
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
                onChange={e => inputFl(e, setInitWeight)}
                type='number'
                placeholder='Ingrese el Peso Bruto'
              />
            </Divinput1>
          </Divweight>
          <Divweight>
            <label>Peso final: </label>
            <Divinput4>
              <InputCustom
                onChange={e => inputFl(e, setLastWeight)}
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
