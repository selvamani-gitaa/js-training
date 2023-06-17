// Declar e a function fullName and it print out your full name.
function fullName(){
    console.log("selvamani")
}
fullName()

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function FullName(firstName,lastName){
    console.log(firstName,lastName)
}
FullName('Selvamani','R')

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(number1,number2){
    sum=number1+number2
    return sum
}

console.log("sum of number",addNumbers(1,2))

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,width){
    area=length*width
    return area
}
console.log("area of Rectangle",areaOfRectangle(23,34))

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width){
    perimeter=2*(length+width)
    return perimeter
}
console.log("perimeter of Rect",perimeterOfRectangle(223,32))

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function prism(length,width,height){
    volume=length*width*height
    return volume
}
console.log("Volume of Prism",prism(134,234,46))

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
// function speed(){
//     let distant_covered = prompt("enter the distance")
//     let time_taken=prompt("enter the time")  
//     let speed=distant_covered/time_taken
//     console.log(speed)
// }
// speed()


// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function BMI(){
    weight=95
    height=1.76
    bmi=weight/(height*height)
    if(bmi>=30){
        console.log('Obese')
    }else if(bmi>25 && bmi<29.9){
        console.log('Overweight')
    }else if(bmi>18.5 && bmi<24.9){
        console.log('Normal')
    }else if(bmi<18.5){
        console.log('Underweight')
    }
}

BMI()

