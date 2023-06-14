// Iterate 0 to 10 using for loop, do the same using while and do while loop
for(i=0;i<=10;i++){
    console.log(i)
}

i=0
while(i<=10){

    console.log(i)
    i++
}

do{
    console.log(i)
    i++
}while(i<=10){}

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for(i=10;i>=0;i--){
    console.log(i)
}
j=10
while(j>=0){
    console.log(j)
    j--
}
k=10
do{
    console.log(k)
    k--
}while(k>=0)

// Iterate 0 to n using for loop
n=100
for(i=0;i<=n;i++){
    console.log(i)
}

// Write a loop that makes the following pattern using console.log():
lines=6
for(i=1;i<=lines;i++)
{
    line=''
    for(j=0;j<i;j++){
        line+="*"
    }
   console.log(line)
}

// Use loop to print the following pattern:

for(i=0;i<=10;i++){
    console.log(i,'x',i,'=',i*i)
}

// Using loop print the following pattern
for(i=0;i<=10;i++){
    console.log(i,'\t',i**2,'\t',i**3)
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for(i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for(i=0;i<=100;i++){
    if(i%2!==0){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
for(i=0;i<=100;i++){
    let v=((6*(i))+1)
    console.log(v)
   } 

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let tot=0
for(i=0;i<=100;i++){
   tot+=i
   } 
console.log(tot)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even=0 
let odd=0
for(i=0;i<=100;i++){
    if(i%2==0){
        even+=i
    }
    else{
        odd+=i
    }
}
console.log(even,odd)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
a=[even,odd]
console.log(a)

// Develop a small script which generate array of 5 random numbers
let randomnum=[]
for(i=0;i<=5;i++){
    let c=Math.round(Math.random()*100)
    randomnum.push(c)
}
console.log(randomnum)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomnum1=[]
for(i=0;i<=5;i++){
    let c1=Math.round(Math.random()*100)
    if(!randomnum1.includes(c1)){
        randomnum1.push(c1)
    } 
}
console.log(randomnum1)

// Develop a small script which generate a six characters random id:
let randomalpha=[]
for(i=0;i<=5;i++){
    let c=Math.round(Math.random()*100)
    randomnum.push(c)
}
console.log(randomnum)

// Develop a small script which generate a six characters random id:
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let rand=[]
for(i=0;i<=5;i++){
    let ri=Math.round((Math.random()*chars.length))
    rand.push(chars.charAt(ri))
}
console.log(...rand)
