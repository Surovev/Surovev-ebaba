function filterArray (arr) {
  return arr.filter(item => typeof (item) === 'number');
}

module.exports = filterArray;
