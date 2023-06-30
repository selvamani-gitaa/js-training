// Write a js function that takes an integer as input and prints all the even numbers from 0 to that integer using a while loop.

function evne(num){
    let i=0
    while (i<=num){
      if(i%2==0){
      console.log(i)
      }
      i++
    }
}

console.log(evne(10))