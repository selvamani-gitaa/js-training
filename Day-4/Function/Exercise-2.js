
// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function quadratic(){
    let a=32
    let b=85
    let c=54
    sqrt= Math.sqrt(b*b-4*a*c)
    let plus_root= -b+sqrt/2*a
    let minus_root= -b-sqrt/2*a
    console.log("The Quadric Equation of x=",plus_root,'and',minus_root)
}

quadratic()

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr){
    for(i of arr){
        console.log(i)
    }
}
printArray([1,2,3,45,6])

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    const x=new Date
    console.log(x.toLocaleString())
}
showDateTime()

// Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x,y){
    c=x
    x=y
    y=c
    console.log('The X Value is',x,"and Y Value is",y)

}

swapValues(3, 4) // x => 4, =>3
swapValues(4, 5) // x = 5, y = 4

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr1){
    let reversed=[]
    for(i=arr1.length-1;i>=0;i--){
        
        reversed.push(arr1[i])
        
    }
    return reversed
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeWords(array) {
    let capitalizedArray = [];
    for ( i = 0; i < array.length; i++) {
        
      if (typeof array[i] === 'string') {
        capitalizedArray.push(array[i].toUpperCase());
      } else {
        capitalizedArray.push(array[i]);
      }
    }
    return capitalizedArray;
  }

let cap=capitalizeWords(['I','aM','bAtMan'])
console.log(cap)



