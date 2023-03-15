function maxIndex(arr) {
  let numMayor = arr[0];
  let position = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr.length === 0) {
      console.log("-1");
    } else if (arr[i] > numMayor) {
      numMayor = arr[i];
      position = i;
    }
  }
  return position;
}

console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(maxIndex([])); // -1
