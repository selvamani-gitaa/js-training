// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let str='He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern=/\d/g
let s=str.match(pattern)
console.log(s)