// const num=[6,7,5]


// num.filter(function(nums){
//     if(nums>5){
        
//     }
// })
// let num=[1,2,3,4,5,6,7,8]
// let news=[]
// for(i of num){
//     if(i%2!==0){
//         news.push(i)

//     }
// }
// console.log(news)


function yourfilter(nums, xyz){

    let news=[]
    for(i of nums){
        if(xyz(i)){
            news.push(i)
        }
    }

    return news;
    
}


function filterEven (num) {
    return num % 2 == 0
}

const nums=[1,2,3,4,5,6,7]
const even=yourfilter(nums, filterEven)
console.log(even)

