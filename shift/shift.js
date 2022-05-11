//SHIFT
export const shift = (arr) => {
  if (typeof arr === []) {
    throw new TypeError('Invalid array length');
  }
  if (typeof arr === 'string') {
    throw new TypeError("Can't use shift on a string");
  } else if (typeof arr === 'number') {
    throw new TypeError("Can't use shift on a number");
  }

  let firstItem = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;

  return firstItem;
};
