// Problem 2: Write a JavaScript program to calculate the number of days in a given month.
// Input: 2 (February)
// Output: 28
function Days(month) {
    const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return monthLengths[month - 1] 
  }

  console.log(Days(1))
  