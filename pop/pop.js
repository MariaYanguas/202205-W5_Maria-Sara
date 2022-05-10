export const pop = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray = [arr[i]];
  }
  arr.length = arr.length - 1;

  return newArray;
};
