// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to
// it and use the typeof operator to check different data types.

let firstname='selvamani'
let lastname='radhakrishnan'
let country='India'
let city='Chennai'
let age=23
let isMarried=false
let year=2023

console.log(typeof(firstname))
console.log(typeof(lastname))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))


// Check if type of '10' is equal to 10

let sample1='10'
let sample2=10
sample1===sample2
    ? console.log('Given Datatype is Match')
    : console.log('Given Datatype is Notmatch')

// Check if parseInt('9.8') is equal to 10

let a=parseInt('9.8')
console.log(a)

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
let first= "any"
let second= (5>3)
let num=23
// Write three JavaScript statement which provide falsy value.
let falsefirst=0
let falsesecond=''
let falsethird=(5<10)

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false

//Find the length of python and jargon and make a falsy comparison statement.
console.log(('python'.length)!=('jargon'.length))

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 //true
4 > 3 || 10 > 12 //true
!(4 > 3) //false
!(4 < 3) //true
!(false) //true
!(4 > 3 && 10 < 12)//false
!(4 > 3 && 10 > 12)  //true
!(4 === '4') //true

// There is no 'on' in both dragon and python
 console.log(!('python'.includes('on') && 'dragon'.includes('on')))


// Use the Date object to do the following activities
let date= new Date()
// What is the year today?
console.log(date.getFullYear())

// What is the month today as a number?
console.log(date.getMonth())
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.