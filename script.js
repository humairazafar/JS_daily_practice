// const indices = [];
// const array = ['a', 'b', 'a', 'c', 'a', 'd'];
// const element = 'a';
// let idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
// let array = [1, 20, 5, 34, 7, 8, 9, 10];

// let over30 = function(elem, index, theArray){
//   console.log(elem + "-" + index + "-" + theArray);
//   return elem > 30;
// }
// console.log(array.findIndex(over30))
// let result = array.find(elem => elem > 5 && elem < 10)
  
// console.log(result);

//finding all the occurances of an elem.
//create an empty array to push the repeated elm. in the array
// let indices = [];
// const array = ['a', 'b', 'a', 'c', 'a', 'd'];
// //elem we want to check 
// const elem = 'a';
// //create a variable to store the inx. of repeated elem. while performing the indexOf method on the array
// let idx = array.indexOf(elem);
// //making sure that the entire array is scanned and not stop at the first finding we use the while statement
// while (idx !== -1){
//   //we push the idx of the elm in our empltry array
//   indices.push(idx);
//   //making sure that we add that idx. while keep moving
//   idx = array.indexOf(elem, idx + 1);
// }
// console.log(indices)
