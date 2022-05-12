export const every = (arr, fn) => {
  if (arr.length === 0) {
    return true;
  }

  let pusher = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      pusher[pusher.length] = arr[i];
      if (pusher.length === arr.length) {
        return true;
      }
    }
  }
  return false;
};
