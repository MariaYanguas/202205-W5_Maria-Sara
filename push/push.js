export const push = (array, ...item) => {
  for (let i = 0; i < item.length; i++) {
    array[array.length] = item;
  }
  return array.length;
};
