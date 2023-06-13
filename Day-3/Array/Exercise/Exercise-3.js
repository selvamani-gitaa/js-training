// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sorted=ages.sort()
// Sort the array and find the min and max age
console.log(ages.sort(),"min=",ages[0],'Max=',ages[ages.length-1])

// Find the median age(one middle item or two middle items divided by two)
console.log("Median Age =",sorted[Math.round(sorted.length/2)])

// Find the average age(all items divided by number of items)
total=ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9]
average=total/ages.length
console.log(average)

// Find the range of the ages(max minus min)
range=ages[sorted.length-1]-sorted[0]
console.log(range)

// Compare the value of (min - average) and (max - average), use abs() method 
x=sorted[0]-average
y=ages[sorted.length-1]-average
console.log("the value of (min - average) is",Math.abs(x) ,"and (max - average) is",Math.abs(y))

// Slice the first ten countries from the countries array
const countries = require('./countries');
console.log(countries.slice(0,10))

// Find the middle country(ies) in the countries array
console.log(countries[Math.round(countries.length/2)])

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if (countries.length%2==0){
    console.log('Even')
    middle=Math.round(countries.length/2)
    array1=(countries.slice(0,middle))
    array2=(countries.slice(middle))
    console.log('Array1=',array1)
    console.log('Array2=',array2)
}else{
    console.log('Odd')

    countries.push('Kenya')
    middle=Math.round(countries.length/2)
    array1=(countries.slice(0,middle))
    array2=(countries.slice(middle))
    console.log('Array1=',array1)
    console.log('Array2=',array2)

}
    

