// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' 
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18. -->

let age=15

if (age>=18){
    console.log('Your are old enough to drive')
}
else{
    console.log('You have to wait',(18-age),'years')
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating 
// who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myage=23
let yourage=21

if(myage>yourage){
    console.log('Im Older')
}
else{
    console.log('Your Older')
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a=35
let b=56

if(a>b){
    console.log(a,"is greater than",b)
}
else if(a==b){
    console.log('Both are equal')
}
else{
    console.log(b,'Greater than',a)
}

//using ternary

(a>b)
    ? console.log(a,"is greater than",b)
    : console.log(b,'Greater than',a)

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?


if(a%2==0){
    console.log('even')
}
else{
    console.log('odd')
}