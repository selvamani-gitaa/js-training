// Problem 23: Write a function that takes an array of numbers as input and returns a new
// array with the numbers sorted in ascending order.
// Input: [10, 5, 8, 3, 1]
// Output: [1, 3, 5, 8, 10]
function ascending(arr){
    return arr.reverse().sort()
}
console.log(ascending([10, 5, 8, 3, 1]))