const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// // Use forEach to console.log each country in the countries array.
// countries.forEach(function(country){console.log(country)})

// // Use forEach to console.log each name in the names array.
// names.forEach(function(namess){console.log(namess)})

// // Use map to create a new array by changing each country to uppercase in the countries array.
// const newarr=[]
// countries.map(function (upper){
//     newarr.push(upper.toUpperCase())
// })
// console.log(newarr)

// // Use map to create an array of countries length from countries array.
// const arrlen=[]
// countries.map(function (arrlength){
//     arrlen.push(arrlength.length)
// })
// console.log(arrlen)

// // Use map to map the products array to its corresponding prices.
// products.map(function(prices){console.log(prices.product,prices.price)})

// Use filter to filter out countries containing land.
const a=countries.filter((IsLand)=> IsLand.includes('Land'))
console.log(a);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(newar){
    let stringList=newar.filter(function(str){
        return typeof str==='string'
    })
    return stringList

}console.log(getStringLists(['selva',1,2,3,4,5,6,'amani']));

// Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce((pre,sum)=>pre+sum))

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log(countries.reduce((rem,nxt)=>rem+" "+nxt ?
))
