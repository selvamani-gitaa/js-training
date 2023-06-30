// Problem 16: Write a JavaScript program to divide two numbers.
// ○ The program should use a try-catch block to handle the error if the denominator
// is 0.
// ○ The program should print an error message if the denominator is 0.

function divide(a,b){
    try {
        c=a/b
        
    } catch (error) {
        console.log(error)
    }
    return c
}
console.log(divide('a',4))