// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {}

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
