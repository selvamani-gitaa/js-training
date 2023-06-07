// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base= prompt(('Enter Base Value'))
let height= prompt('Enter Height Value')
area=0.5*base*height
console.log(area)

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sidea=prompt('Enter the Side A')
let sideb=prompt('Enter the Side B')
let sidec=prompt('Enter the Side C')
console.log('The Perimeter of Triangle is',a+b+c)

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

const length = (prompt("Enter the length of the rectangle:"))
const width = (prompt("Enter the width of the rectangle:"))
const area = length * width
const perimeter = 2 * (length + width)
console.log("The area of the rectangle is: " + area)
console.log("The perimeter of the rectangle is: " + perimeter)

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const radius = parseFloat(prompt("Enter the radius of the circle:"))
const pi = 3.14
const areas = pi * radius * radius
const circumference = 2 * pi * radius
console.log("The area of the circle is: " + areas)
console.log("The circumference of the circle is: " + circumference)

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
const hoursWorked = (prompt("Enter the number of hours worked:"))
const ratePerHour = (prompt("Enter the rate per hour:"))
const pay = hoursWorked * ratePerHour
console.log("The pay is: " + pay)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
const names = 'selvamani'
const message = names.length > 7 
    ? "Your name is long." 
    : "Your name is short."
console.log(message);

// Compare your first name length and your family name length and you should get this output.
const firstName = 'selvamani'
const familyName = 'radhakrishnan'
const firstNameLength = firstName.length
const familyNameLength = familyName.length
const output = firstNameLength > familyNameLength
  ? "Your first name"+firstName+'is longer than your family name.'
  :
console.log(output);

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log("I am", ageDifference, "years older than you.");

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
const birthYear = parseInt(prompt("Enter your birth year:"))
const currentYear = new Date().getFullYear()
const age = currentYear - birthYear
const messages = age >= 18
  ? `You are ${age}. You are old enough to drive.`
  : `You are ${age}. You will be allowed to drive after ${18 - age} year(s).`
console.log(messages)

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
const yearsLived = parseInt(prompt("Enter the number of years you have lived:"))
const secondsPerYear = 365 * 24 * 60 * 60
const totalSecondsLived = yearsLived * secondsPerYear
console.log("You have lived", totalSecondsLived, "seconds.")

// Create a human readable time format using the Date time object









