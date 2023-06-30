// Problem 17: Write a function that takes an array of numbers as input and returns the
// sum of all the even numbers in the array.
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12

function sum(arr){
    summ=0
    for (i of arr){
        if(i%2==0){
            summ+=i
        }
    }
    return summ
}
console.log(sum([1, 2, 3, 4, 5, 6]))