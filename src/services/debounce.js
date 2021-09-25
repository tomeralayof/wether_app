export const debounce = (fn, delay) => {
  let timeoudId;
  return function (...args) {
    if (timeoudId) {
      clearTimeout(timeoudId);
    }
    timeoudId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};