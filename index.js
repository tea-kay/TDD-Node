function findMaxNumber(arr) {
  return arr.map(subArray => Math.max(...subArray))
}

module.exports = findMaxNumber;
