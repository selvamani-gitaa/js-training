// Write a function called "cloneObject" that takes an object as input and returns a
// new object with the same properties and values as the input object using the spread operator.
// Example:
// Input: { name: "John", age: 25, city: "New York" }
// Output: { name: "John", age: 25, city: "New York" }

function cloneObject(obj){
    let newobj={...obj}
    return newobj
}
console.log(cloneObject({ name: "John", age: 25, city: "New York" }))