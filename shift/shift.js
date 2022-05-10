//SHIFT
export const shift = (arr) => {
  let firstItem = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;

  return firstItem;
};
