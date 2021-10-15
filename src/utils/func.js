export const divGr = (weight, bunch, array1, limit) => {
  let temp = 0;
  let initValue = weight / bunch;
  let tempSum = 0;

  return array1.map((_items, index) => {
    let sum = 0.012;
    let rest = 0.01;

    if (temp === 0 && index === 0) {
      temp = initValue;
      tempSum = temp;

        return initValue.toFixed(2);
    } else if (temp >= weight) {
    //  return null;
     tempSum = tempSum - rest;
    } else if (array1.length - 1 !== index) {
      tempSum = tempSum + sum;

      temp = temp + tempSum;

      return tempSum.toFixed(2);
    } else if (array1.length - 1 === index) {
      return (weight - temp).toFixed(2);
    }

    return '';
  });
};
