// Create a closure which has three inner functions

function calculator(a,b){
    let ans=0
    function add(){
        ans=a+b
        return ans
    }
    function sub(){
        ans=a-b
        return ans
    }
    function mul(){
        ans=a*b
        return ans
    }
    return {Multiple:mul(),
     Addition:add(),
     Subtract:sub()
    }

}

const calc=calculator(2,2)
console.log(calc.Addition)
console.log(calc.Multiple)
console.log(calc.Subtract)