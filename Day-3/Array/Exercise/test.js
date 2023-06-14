let a=['apple','samsung','google']
let b=['apple','microsoft']
const new1 =[...a,...b]
let uniq=new Set(new1)
let merged=[...uniq]
console.log(merged)

