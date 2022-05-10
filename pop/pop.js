export const pop = (arr) => {
  let newArray = [];
  if (typeof arr === 'string') {
    let errorMessage = "Can't use pop on a string";
    return errorMessage;
  } else if (typeof arr === 'number') {
    let errorMessageNumber = "Can't use pop on a number";
    return errorMessageNumber;
  }
  for (let i = 0; i < arr.length; i++) {
    newArray = [arr[i]];
  }
  arr.length = arr.length - 1;

  return newArray;
};

typeof String;
