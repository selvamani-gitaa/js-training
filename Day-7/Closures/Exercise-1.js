// Create a closure which has one inner function

function ouuter(){
    let a=1
    function inner(){
        a++
        return a    
    }
    return inner
   

}
const outter= ouuter()
console.log(outter())
console.log(outter())
console.log(outter())
console.log(outter())
console.log(outter())

