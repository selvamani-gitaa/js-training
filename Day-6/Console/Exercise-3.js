// Check the speed difference among the following loops: while, for, for of, forEach

console.time("END of FOR Loop")
for(i=0;i<=100;i++){
    console.log(i);
}
console.timeEnd('END of FOR Loop')