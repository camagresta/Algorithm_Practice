// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {
  let results = [];

  while (left.length || right.length) {
    if (left[0] === undefined || left[0] > right[0]) {
      results.push(right.shift());
    } else {
      results.push(left.shift());
    }
  }
  return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
