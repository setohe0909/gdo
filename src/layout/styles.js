import styled from '@emotion/styled';

import colors from '../colors';

export const Containermain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  background: ${colors.white};
  box-shadow: 2px 2px 24px -6px ${colors.silverChalice};
  right: 200px;
  border-radius: 8px;
  padding: 1em;
  width: 80%;
  height: auto;
  margin: 40px auto;
  padding: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
