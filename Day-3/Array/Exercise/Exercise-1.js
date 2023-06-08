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
console.log(company[0],company[1],company[2],company[3],company[4],company[5],company[6])
// Change each company name to uppercase one by one and print them out
let first=company[0].toString()
console.log(first.toUpperCase())
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(company[0,1,3,4,5])







