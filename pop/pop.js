let newArray = [];
export const pop = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    newArray = [arr[i]];
  }
  return newArray;
  arr.length = arr.length - 1;
};
