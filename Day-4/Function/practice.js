// let fib=0

// for (i=0;i<=100;i++){
//     console.log(fib)
//     fib+=i
// }

let a=[1,2,2,3,3,4,5,6,7,8,8,9,9]
let newarr=[]
for(i=0;i<a.length;i++){
    if(a[i]!==a[i+1]&&a[i]!==a[i-1]){
        newarr.push(a[i])
}
}
console.log(newarr)