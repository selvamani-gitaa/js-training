// : Write a function called "mergeArrays" that takes two arrays as input and returns a
// new array that combines the elements of both arrays using the spread operator.
// Example:
// Input: [1, 2, 3], [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]

function mergeArrays(arr1,arr2){
    return([...arr1,...arr2])
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]))