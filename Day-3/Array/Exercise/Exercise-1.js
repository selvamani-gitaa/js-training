// Declare an empty array;
let empty=[]

// Declare an array with more than 5 number of elements
let superhero=[
    'Ironman','Batman','Spiderman','Superman','Flash','Selvamani'
]

// Find the length of your array
console.log(superhero.length)

// Get the first item, the middle item and the last item of the array
let last=superhero.length
console.log('First Value - ',superhero[0])
console.log('Last Value - ',superhero[last-1])
console.log('Middle Value - ',superhero[last/2])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes=['Sunday',1,'Monday',2,'Tuesday',3,'Wednesday']
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let company=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
console.log(company)

// Print the number of companies in the array
console.log(company.length)

// Print the first company, middle and last company
let total=company.length
console.log('First Value - ',company[0])
console.log('Last Value - ',company[total-1])
console.log('Middle Value - ',(company[Math.round(total/2)]))

// Print out each company
console.log(company.toString())
// Change each company name to uppercase one by one and print them out
let first=company[0].toString()
console.log(first.toUpperCase())

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(company.splice(5,0,'and'))
console.log(company.toString(),"are big IT Companies")

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let finish=company.includes('Amazon')
console.log(finish)
if(finish==true){
    console.log("Include")
}
else{
    console.log("Not Included")
}

// Filter out companies which have more than one 'o' without the filter method
// 2

// company[0].includes('o')
// company[1].includes('o')
// company[2].includes('o')
// company[3].includes('o')
// company[4].includes('o')
// company[5].includes('o')

// Sort the array using sort() method
console.log(company.sort())
// Reverse the array using reverse() method
console.log(company.reverse())
// Slice out the first 3 companies from the array
console.log(company.slice(0,3))
// Slice out the last 3 companies from the array
console.log(company.slice(-3))
// Slice out the middle IT company or companies from the array
let v=company.slice(Math.round(company.length/2),(company.length/2)+1)
console.log(v)
// Remove the first IT company from the array
console.log(company.shift())
// Remove the middle IT company or companies from the array
console.log(company.splice(Math.round(company.length/2),1))
// Remove the last IT company from the array
console.log(company.pop())
// Remove all IT companies
console.log(company.length=0)



