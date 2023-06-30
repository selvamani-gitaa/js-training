// Write a function called "mergeObjects" that takes two objects as input and returns a
// new object that combines the properties of both objects using the spread operator. If there are
// any conflicting properties, the values from the second object should overwrite the values from
// the first object.
// Example:
// Input: { a: 1, b: 2 }, { b: 3, c: 4 }
// Output: { a: 1, b: 3, c: 4 }

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }))

  