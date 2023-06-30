// Problem 27: Write a function that takes two arrays as input and returns a new array
// containing the common elements between the two arrays, using Sets.
// Input: [1, 2, 3, 4, 5], [4, 5, 6, 7, 8]
// Output: [4, 5]

function common(arr1,arr2){
    let ar2= new Set(arr2)
    inter=arr1.filter((intersection)=>ar2.has(intersection))
    return inter
}
console.log(common([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]))
