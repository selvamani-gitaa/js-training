// Develop a small script which generate any number of characters random id:
let random=''
const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let randnum=Math.round(Math.random()*10)
for(i=0;i<randnum;i++){
    random+=chars.charAt(Math.round(Math.random(chars)*chars.length))
}
console.log(random)

// Write a script which generates a random hexadecimal number.
let hexa='#'
const chars1='abcdefghijklmnopqrstuvwxyz0123456789'
for(i=0;i<6;i++){
    hexa+=chars1.charAt(Math.round(Math.random(chars1)*chars1.length))
}
console.log(hexa)

// Write a script which generates a random rgb color number.
let one = ''
let two = ''
let three = ''
const nos='1234567890'
for(i=0;i<3;i++){
    one+=nos.charAt(Math.round(Math.random(nos)*nos.length))
}
for(i=0;i<3;i++){
    two+=nos.charAt(Math.round(Math.random(nos)*nos.length))
}
for(i=0;i<3;i++){
    three+=nos.charAt(Math.round(Math.random(nos)*nos.length))
}
console.log('rgb(',one,',',two,',',three,')')

// Using the above countries array, create the following new array.

let countries=["ALBANIA", "SELVMAANIA","BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// Using the above countries array, create an array for countries length'.
const lengthofarr=[]
for(i of countries){
    lengthofarr.push(i.length)
}
console.log(lengthofarr)

// Use the countries array to create the following array of arrays:
let all=[]
for(i=0;i<countries.length;i++){
    
  let contries=countries[i]
  let sl=countries[i].slice(0,3)
  let lengthh=contries.length
  let newarr=[contries,sl,lengthh]
  all.push(newarr)
}
console.log(all)

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let same=[]
for(i of countries){
    if(i.includes('LAND')){
        same.push(i)
    }
}
if(same.length==0){
    console.log('All these countries are without land')
}else{
    console.log(same)
}

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

let newsame=[]
for(i of countries){
    if(i.includes('IA')){
        newsame.push(i)
    }
}
if(newsame.length==0){
    console.log('These are countries ends without ia')
}else{
    console.log(newsame)
}

// Using the above countries array, find the country containing the biggest number of characters.
// let longestCountry = "";

// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length > longestCountry.length) {
//     longestCountry = countries[i];
//   }
// }
// console.log(longestCountry);

for(i of countries){
    for(j of countries){
        console.log(i+j)
    }
}