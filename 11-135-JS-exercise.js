function printReverse(items) {
  for (let i = items.length-1; i >= 0; i--) {
    console.log(items[i]);
  }
}

// would refactoring the following with first = items[0] before the loop
// decrease computational time because we don't access the array twice each time?
function isUniform(items) {
  for (let i = 1; i < items.length; i++){
    if (items[0] !== items[i]){
      return false;
    }
  }
  return true;
}

// refactor sumArray(items):
function sumArray(items) {
  let sum = 0;
  items.forEach(function(element){
    sum += element;
  });
  return sum;
}
// function sumArray(items) {
//   let sum = 0;
//   for (let i = 0; i < items.length; i++){
//     sum = sum + items[i];
//   }
//   console.log(sum)
// }

// refactoring max()
function max(items) {
  mx = 0;
  items.forEach(function(element){
    if (mx < element){
      mx = element;
    }
  });
  return mx;
}

// function max(items) {
//   let mx = items[0];
//   for (i = 1; i < items.length; i++){
//     if (mx < items[i]){
//       mx = items[i];
//     }
//   }
//   return mx;
// }
