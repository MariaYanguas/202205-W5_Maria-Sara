export const shift = (arr) => {
  if (arr.length === 0) {
    throw new TypeError('Invalid array length');
  }
  if (Array.isArray(arr) === false) {
    throw new TypeError();
  }

  let firstItem = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;

  return firstItem;
};
