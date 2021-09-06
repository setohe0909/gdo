import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { withRouter } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

import { grAtom } from '../../atoms';
import { divGr } from '../../utils/func';

import {
  Divweight,
  Divinput1,
  Divinput2,
  Divinput3,
  Divinput4,
  Btnresult,
  InputCustom,
  RangeInput,
} from './styles';
import 'react-toastify/dist/ReactToastify.css';

const MainContainer = () => {
  const [grossWeight, setGrossWeight] = useState('');
  const [law, setLaw] = useState('');
  const [fine, setFine] = useState('');
  const [initWeight, setInitWeight] = useState('');
  const [lastWeight, setLastWeight] = useState('');
  const [range, setRange] = useState(0);

  const [, setdDtaInfo] = useAtom(grAtom.dataInfo);

  const randomBetween = (min, max, decimalPlaces) => {
    const randomValue = Math.random() * (max - min) + min;

    return +randomValue.toFixed(decimalPlaces) * 1;
  };

  const validate = () => {
    if (
      grossWeight === '' &&
      law === '' &&
      fine === 0 &&
      initWeight === '' &&
      lastWeight === '' &&
      range === 0
    ) {
      toast.error('Todos los campos son obligatorios', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const divideRange = grossWeight / initWeight;
      let outputArray = new Array(Math.round(divideRange)).fill('');

      const divGrResult = divGr(
        +grossWeight,
        +divideRange,
        outputArray,
        +lastWeight
      );

      outputArray = outputArray.map((_item, index) => {
        const law = randomBetween(0.0, 0.999, 3);

        return {
          id: index + 1,
          gr: divGrResult[index],
          law,
          fine: (divGrResult[index] * law).toFixed(2),
        };
      });

      setdDtaInfo(outputArray);
    }

    return;
  };

  const inputFl = (e, func) => {
    e.preventDefault();
    const number = +e.target.value;

    if (number >= 0) {
      func(e.target.value);
    } else {
      toast.error('Formato no válido', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    const result = grossWeight * law;
    setFine(result);
  }, [grossWeight, law]);

  return (
    <div>
      <div>
        <h1>Material</h1>
        <div className="container">
          <Divweight>
            <label>Peso Bruto:</label>
            <Divinput1>
              <InputCustom
                onChange={(e) => inputFl(e, setGrossWeight)}
                type="number"
                placeholder="Ingrese el Peso Bruto"
              />
            </Divinput1>
          </Divweight>
          <Divweight>
            <label>Ley:</label>
            <Divinput2>
              <InputCustom
                onChange={(e) => inputFl(e, setLaw)}
                type="number"
                placeholder="Ingrese Ley"
              />
            </Divinput2>
          </Divweight>
          <Divweight>
            <label>Finos:</label>
            <Divinput3>
              <InputCustom
                value={fine}
                disabled
                type="number"
                placeholder="Ingrese finos"
              />
            </Divinput3>
          </Divweight>
        </div>
      </div>

      <div>
        <h1>Rango de peso</h1>
        <div className="container">
          <Divweight>
            <label>Peso inicial:</label>
            <Divinput1>
              <InputCustom
                onChange={(e) => inputFl(e, setInitWeight)}
                type="number"
                placeholder="Ingrese el Peso Bruto"
              />
            </Divinput1>
          </Divweight>
          <Divweight>
            <label>Peso final: </label>
            <Divinput4>
              <InputCustom
                onChange={(e) => inputFl(e, setLastWeight)}
                type="number"
                placeholder="Ingrese Ley"
              />
            </Divinput4>
          </Divweight>
          <RangeInput>
            <label>Rango de Ley 998: </label>
            <Divinput4>
              <InputCustom
                onChange={(e) => inputFl(e, setRange)}
                type="range"
                min="0"
                max="1"
                step="0.25"
              />
              {range}
            </Divinput4>
          </RangeInput>
        </div>
      </div>
      <Btnresult type="button" onClick={() => validate()}>
        Obtener resultados
      </Btnresult>

      <ToastContainer />
    </div>
  );
};

export default withRouter(MainContainer);
