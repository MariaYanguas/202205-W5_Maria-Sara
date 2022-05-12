export const pop = (arr) => {
  let deletedValue = [];
  if (arr.length === 0) {
    throw new TypeError('Invalid array length');
  }

  if (typeof arr === 'string') {
    throw new TypeError("Can't use pop on a string");
  } else if (typeof arr === 'number') {
    throw new TypeError("Can't use pop on a number");
  }
  for (let i = 0; i < arr.length; i++) {
    deletedValue = arr[i];
  }
  arr.length = arr.length - 1;

  return deletedValue;
};
