function binarySearch(list, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? list.length - 1 : end;
  
  if (start > end) {
    return -1;
  } 
  
  const index = Math.floor((start + end) / 2 );
  const item = list[index];
  console.log(`Looking at ${item} between ${start} and ${end}`);
  if (item === value) {
    return index;
  } else if (item < value) {
    return binarySearch(list, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(list, value, start, index - 1);
  }
  
}

module.exports = binarySearch;