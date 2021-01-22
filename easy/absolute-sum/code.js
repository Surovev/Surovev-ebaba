function getAbsSum (arr) {
  return arr.reduce((value, el) => value + Math.abs(el), 0);
}

module.exports = getAbsSum;
