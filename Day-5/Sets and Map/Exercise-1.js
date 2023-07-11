// create an empty set
let empset=new Set()
console.log(empset)

// Create a set containing 0 to 10 using loop
for(i=1;i<=10;i++){
    empset.add(i)
}
console.log(empset)

// Remove an element from a set
empset.delete(5)
console.log(empset)

// Clear a set
empset.clear()
console.log(empset)

// Create a set of 5 string elements from array
const superhero=['Batman', 'Selvamani','Superman','Superman']
unique=new Set(superhero)

// for (i of superhero){
//     unique.add(i)    
// } 
console.log(unique)


// Create a map of countries and number of characters of a country
const newar=[
    ['India',5],
    ['Pakistan',9]
]
let countries=new Map(newar)
console.log(countries)