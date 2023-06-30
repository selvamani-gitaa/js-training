//  Implement a function called "getCurrentDateTime" that takes no
// parameters. The function should use the Date object's methods to retrieve various
// information about the current date and time and return an object containing the
// following properties:
// year
// month
// date
// day
// hours
// minutes
// seconds
// milliseconds
// timestamp
// Expected output:
// {
// year: 2023,
// month: 5,
// date: 29,
// day: 4,
// hours: 12,
// minutes: 30,
// seconds: 45,
// milliseconds: 500,
// timestamp: 13412341231233
// }

let date=new Date()
console.log("Year: ",date.getFullYear())
console.log("Month: ",date.getMonth())
console.log("Date: ",date.getDate())
console.log("Day: ",date.getDay())
console.log("Hours: ",date.getHours())
console.log("Minutes: ",date.getMinutes())
console.log("Seconds: ",date.getSeconds())
console.log("Milliseconds: ",date.getMilliseconds())
console.log("Timestamp: ",date.getTime())