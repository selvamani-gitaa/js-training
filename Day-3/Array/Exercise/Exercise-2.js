// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
const countries = require('./countries');
const webTechs = require('./web_techs');
console.log('Countries:', countries);
console.log('Web Technologies:', webTechs);

// First remove all the punctuations and change the string to array and count the number of words in the array
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let empty= [text.split(' ')]
// empty.push(text)
// console.log(empty)
// console.log(words.length)

// In the following shopping cart add, remove, edit items
// const shoppingCart = ['Meat','Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ['Meat','Milk', 'Coffee', 'Tea', 'Honey','Cream']
if (shoppingCart[0]=='Meat'){
    console.log('Already Present In your Cart')
}
else{
    shoppingCart.unshift('Meat')
    console.log('Meat Added to your Cart' ,shoppingCart)

}

// add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart[shoppingCart.length-1]=='Sugar'){
    console.log('Already Present In your Cart')
}
else{
    shoppingCart.push('Sugar')
    console.log('Sugar Added to your Cart' ,shoppingCart)

}

// remove 'Honey' if you are allergic to honey
let allergy=true
console.log(shoppingCart)
if (allergy==true){
   let rem = shoppingCart.indexOf('Honey')
   shoppingCart.splice(rem,1)
   console.log('Honey Was Removed',shoppingCart)
}

// modify Tea to 'Green Tea'
let mod=shoppingCart.indexOf('Tea')
if(mod==-1){
    console.log('Tea Not Present')
}
else{
    shoppingCart.splice(mod,1,'Green Tea')
    console.log('Modified')
}

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let chcke=countries.includes('Ethiopia')
console.log(chcke)
if(chcke==true){
    console.log("Already Exists")
}else{
    countries.push('Ethiopia')
    console.log(countries)
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let chcked=webTechs.includes('Sass')
console.log(chcke)
if(chcked==true){
    console.log("Sass is a CSS preprocess ")
}else{
    countries.push('Sass')
    console.log(countries)
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
fullStack=frontEnd.concat(backEnd)
console.log(fullStack)



