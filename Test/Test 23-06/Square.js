// Write a function to print the square pattern
function square(n){
let sqr = "";
for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) { 
    sqr += "*"
  }
  sqr += "\n"
}
return sqr
}
console.log(square(5))