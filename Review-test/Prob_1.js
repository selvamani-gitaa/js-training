// Write a JavaScript program to calculate the number of days in a given month.

function getDayOfWeek(dates) {
   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   const date = new Date(dates)
   const dayOfWeek = date.getDay()
   
   return daysOfWeek[dayOfWeek]
 }
 

 console.log(getDayOfWeek("2023-06-29"))

 