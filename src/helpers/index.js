export function debounce(fn, delay) {
  var timedout;
  return function (...args) {
    if (timedout) {
      clearTimeout(timedout);
    }
    timedout = setTimeout(() => fn(...args), delay);
  };
}

export function findInRecords(arr, str) {
  return arr.filter(
    (v) => v.name.toLowerCase().indexOf(str.toLowerCase()) > -1
  );
}
