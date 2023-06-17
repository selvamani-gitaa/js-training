// Copy countries array(Avoid mutation)
let countries=["ALBANIA","BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let copied_countries=[...countries]
let sorted_countries=copied_countries.sort()
console.log(sorted_countries)

// Sort the webTechs array and mernStack array
let webTechs = require('/home/gitaa/JS/js-training/Day-3/Array/Exercise/web_techs.js')
sorted_webTechs=webTechs.sort()
let mernStack=require("./Exercise-2")
soreted_mernStack=mernStack.sort()

// Extract all the countries contain the word 'land' from the countries array and print it as array
let land_contain=[]
for (i of countries){
    if(i.includes('LAND')) {
    land_contain.push(i)
}
}
console.log(land_contain)

// Extract all the countries containing only four characters from the countries array and print it as array

let four_char=[]
for (i of countries){
    if(i.length==4) {
    four_char.push(i)
}
}
console.log(four_char);

// Reverse the countries array and capitalize each country and stored it as an array
let reverse_countries=countries.reverse()
console.log(reverse_countries);

