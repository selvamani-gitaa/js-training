// Write a JavaScript program to calculate the number of days in a given year.
// Input: 2023
// Output: 365

function getNumberOfDays(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 366
    } else {
      return 365
    }
  }
  
  
  console.log(getNumberOfDays(2024))
  