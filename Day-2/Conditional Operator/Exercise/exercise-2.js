// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let mark = 10

if(mark>=80 && mark<=100)
{
console.log("A Grade")
}
else if(mark>=75 && mark<=89)
{
console.log("B Grade")
}
else if(mark>=60 && mark<=69)
{
console.log("C Grade")
}
else if(mark>=50 && mark<=59)
{
console.log("D Grade")
}
else if(mark>=0 && mark<=49)
{
console.log("F Grade")
}
else
{
    console.log('Invalid Mark')
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let season = 'march'.toLowerCase()

if(season=='september' || season=='october' || season=='november')
{
    console.log('Autumn')
}
else if(season=='january' || season=='february' || season=='december')
{
    console.log('Winter')
}
else if(season=='march' || season=='april' || season=='may')
{
    console.log('Spring')
}
else if(season=='june' || season=='july' || season=='august')
{
    console.log('Summer')
}
else{
    console.log('Invalid Month')
}

// Check if a day is weekend day or a working day. Your script will take day as an input.

let days='monday'.toLowerCase()

if(days=='monday'||days=='tuesday'||days=='wednesday'||days=='thursday'||days=='friday'){
    console.log('Working Day')
}
else if(days=='saturday'||days=='sunday'){
    console.log('HoliDay')
}
else{
    console.log('Invalid Day')
}