// Problem 18: Write a function that takes a string as input and returns an array of all the
// words in the string.
// Input: "Hello, how are you?"
// Output: ["Hello", "how", "are", "you"]

function convertor(words){
    const arr=[...words.split(" ")]
    return arr
}
console.log(convertor("Hello, how are you?"))