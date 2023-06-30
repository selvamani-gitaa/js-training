// Write a function that takes an array of numbers as input and returns a new
// array where each number has been squared.
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

function square(arr){
    newarr=[]
    for(i of arr){
        newarr.push(i*i)
    }
    return newarr
}
 console.log(square([1, 2, 3, 4, 5]))