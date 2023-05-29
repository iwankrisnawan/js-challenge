const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  let median = 0;
  let sorted = input.sort((a, b) => a - b);
  let middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
    median = sorted[middle];
  } else {
    median = (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return median;
}

console.log(result(input));
