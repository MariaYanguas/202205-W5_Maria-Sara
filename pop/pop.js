export const pop = (arr) => {
  let deletedValue = [];
  if (arr.length === 0) {
    throw new TypeError('Invalid array length');
  }

  if (Array.isArray(arr) === false) {
    throw new TypeError('Invalid Object. Introduce an Array.');
  }
  for (let i = 0; i < arr.length; i++) {
    deletedValue = arr[i];
  }
  arr.length = arr.length - 1;

  return deletedValue;
};
