// Problem 19: Write a function that takes an array of strings as input and returns a new
// array where each string has been reversed.
// Input: ["hello", "world"]
// Output: ["olleh", "dlrow"]

function reverses(arr){
    rever=""
    c=[]
    for (i=0;i<=arr.length;i++){
        sum=arr[i]
        console.log(sum);
        rever=sum.reverse()
        c.push(rever)

    }
    return c

}
console.log(reverses(["hello", "world"]))