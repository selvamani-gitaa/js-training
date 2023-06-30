// Write a function that takes an array of numbers as input and returns a new
// array containing only the unique numbers in the original array, using a Set.
// Input: [1, 2, 3, 2, 4, 3]
// Output: [1, 2, 3, 4]

function og(arr){
    let y=[...new Set(arr)]
    return y
}
console.log(og([1, 2, 3, 2, 4, 3]))