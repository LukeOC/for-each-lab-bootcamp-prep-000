function iterativeLog(array) {
  function logger(element, index, array) {
    console.log(`${index}: ${element}`);
  }
array.forEach(logger);
}

function iterate(callback) {
  array = ['uhn', 'lookin', 'haa'];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
array.forEach(callback);
}
