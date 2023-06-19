// Create an empty object called dog
// const dog={}

// Print the the dog object on the console
// console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// const dog={
//  name: "Happy", 
//  legs: "four",
//  color: "golden",
//  age: 2,
//  bark: function(){
//     return "woof woof"
//  }
// }

// Get name, legs, color, age and bark value from the dog object
// console.log(dog.name, dog.color, dog.age, dog.bark())

// Set new properties the dog object: breed, getDogInfo
const dog={
    name: "Happy", 
    legs: "four",
    color: "golden",
    age: 2,
    bark: function(){
       return "woof woof"
    },
    breed: 'Labrador',
    getDogInfo: function(){
        return` Name: ${this.name}, Breed: ${this.breed}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}`
    }

   }
console.log(dog.getDogInfo())
