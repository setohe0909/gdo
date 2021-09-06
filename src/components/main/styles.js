import styled from '@emotion/styled';

import colors from '../../colors';

export const Divweight = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  margin-bottom: 1.5em;
`;
export const Divinput1 = styled.div`
  font-family: 'Montserrat', sans-serif;
  height: 1.6em;
  display: flex;
  margin-left: 2.8em;
`;
export const Divinput2 = styled.div`
  font-family: 'Montserrat', sans-serif;
  height: 1.6em;
  display: flex;
  margin-left: 6.6em;
`;
export const Divinput3 = styled.div`
  font-family: 'Montserrat', sans-serif;
  height: 1.6em;
  display: flex;
  margin-left: 5.7em;
`;
export const Divinput4 = styled.div`
  font-family: 'Montserrat', sans-serif;
  height: 1.6em;
  display: flex;
  margin-left: 3.5em;
`;
export const Btnresult = styled.button`
  font-family: 'Montserrat', sans-serif;
  background: ${colors.sanMarino};
  color: ${colors.white};
  width: 145px;
  height: 40px;
  margin: 20px;
  margin-left: -0.5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export const InputCustom = styled.input`
  border: 1.5px solid ${colors.whiteDark};
  border-radius: 4px;
  padding: 5px;
`;

export const ErrorMSg = styled.span`
  color: ${colors.redDark};
  position: absolute;
  font-weight: 600;
`;

export const RangeInput = styled.div`
  display: flex;
  flex-direction: column;
`;
