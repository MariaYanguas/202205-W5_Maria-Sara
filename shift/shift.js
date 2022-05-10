//SHIFT
export const shift = (array) => {
  let a;
  let rest;
  [a, ...rest] = array;
  array = rest;

  return a;
};
