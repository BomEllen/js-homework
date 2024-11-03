
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];



function getNumberAtArray(arr, index) {
  if (0 <= index && index < arr.length) {
    return arr[index]
  } else {
    return "🚨ERROR🚨";
  }
}



console.log(getNumberAtArray(numbers, 8)); 
console.log(getNumberAtArray(numbers, 0)); 
console.log(getNumberAtArray(numbers, 9)); 
console.log(getNumberAtArray(numbers, 55)); 
console.log(getNumberAtArray(numbers, -1)); 