// Write a function called "concatArrays" that takes an arbitrary number of arrays as
// input and returns a new array that concatenates all the input arrays using the spread operator.
// Example:
// Input: [1, 2], [3, 4], [5, 6]
// Output: [1, 2, 3, 4, 5, 6]

function concatArrays(arr1,arr2,arr3){
    return([...arr1,...arr2,...arr3])
}
console.log(concatArrays([1, 2], [3, 4], [5, 6]))