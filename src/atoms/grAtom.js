import { atom } from 'jotai';

const dataInfo = atom([]);
const totals = atom([]);
const totalLaw = atom('');

export const grAtom = {
  dataInfo,
  totals,
  totalLaw
};
