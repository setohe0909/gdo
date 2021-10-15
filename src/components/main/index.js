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
  InputLawRange,
  DivrangeMin,
  DivrangeMax,
  ContainerRange,
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
  const [, setTotals] = useAtom(grAtom.totals);
  const [, setTotalLaw] = useAtom(grAtom.totalLaw);

  const avarageMinLaw = +law - 0.045;
  const avarageMaxLaw = +law + 0.01;

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
      //numero de lineas basadas en el peso
      const divideRange = grossWeight / initWeight;
      let outputArray = new Array(Math.round(divideRange)).fill('');

      const divGrResult = divGr(
        +grossWeight,
        +divideRange,
        outputArray,
        +lastWeight
      );

      let fineSum = 0;
      let grSum = 0;
      outputArray = outputArray
        .map((_current, index) => {
          const law = randomBetween(avarageMinLaw, avarageMaxLaw, 3);
          fineSum = fineSum + +(divGrResult[index] * law).toFixed(3);
          grSum = grSum + +divGrResult[index];

          return {
            id: index + 1,
            gr: grSum > grossWeight ? null : +divGrResult[index],
            law: +law,
            fine:
              fineSum > fine ? null : +(divGrResult[index] * law).toFixed(3),
          };
        })
        .filter((item) => item.fine !== null);

      grSum = 0;
      outputArray = outputArray
        .map((item, _index) => {
          debugger;
          grSum = grSum + +item.gr;

          const sortItems = outputArray.sort((a, b) => {
            return a.gr - b.gr;
          });

          const largest = sortItems[sortItems.length - 1].gr;

          if (grSum > grossWeight) {
            item.gr = null;
          }

          return {
            ...item,
            gr: +(item.gr + largest / outputArray.length).toFixed(3),
          };
        })
        .filter((item) => item.gr !== null);

      const outputTotal = outputArray.reduce((acc, current) => {
        return {
          fine: acc.fine + current.fine,
          law: acc.law + current.law,
          gr: acc.gr + current.gr,
        };
      });

      setTotalLaw(law);
      setTotals(outputTotal);
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
    const result = (grossWeight * law).toFixed(3);
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
                {...(e) => inputFl(e.target.value)}
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
                placeholder="Ingrese Peso Inicial"
              />
            </Divinput1>
          </Divweight>
          <Divweight>
            <label>Peso final: </label>
            <Divinput4>
              <InputCustom
                onChange={(e) => inputFl(e, setLastWeight)}
                type="number"
                placeholder="Ingrese Peso Final"
              />
            </Divinput4>
          </Divweight>
          <RangeInput>
            <ContainerRange>
              <label>Rango de Ley: </label>
            </ContainerRange>
            <Divinput4>
              <DivrangeMin>{avarageMinLaw}</DivrangeMin>
              <InputLawRange
                onChange={(e) => inputFl(e, setRange)}
                type="range"
                min={avarageMinLaw}
                max={avarageMaxLaw}
                step="0.25"
              />
              <DivrangeMax>{avarageMaxLaw}</DivrangeMax>
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
