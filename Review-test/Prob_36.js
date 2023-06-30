// Write a function called convertArrayToObject which can convert the array to a
// structure object.
// Input: const students = [
// ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
// ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]
// Expected output:
// [
// {
// name: 'David',
// skills: ['HTM','CSS','JS','React'],
// scores: [98,85,90,95]
// },
// {
// name: 'John',
// skills: ['HTM','CSS','JS','React'],
// scores: [85, 80,85,80]
// }
// ]

function convertArrayToObject(arr){
    for(i of arr){
        console.log(i);
    }

}
students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
     ]
convertArrayToObject(students)