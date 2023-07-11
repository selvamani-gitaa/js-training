const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// Find a union b
const c=[...a,...b]
union=new Set(c)
console.log(union);

// Find a intersection b
let bb=new Set(b)
inter=a.filter((intersection)=>bb.has(intersection))
console.log(inter)

// Find a with b
