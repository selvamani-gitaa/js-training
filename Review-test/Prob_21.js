// Write a function that takes a string as input and returns a new string where
// all the vowels have been removed.
// Input: "Hello, how are you?"
// Output: "Hll, hw r y?"

function removed(str){
    newstr=''
    for(i of str){
        if(i=="a"||i=='e'||i=="i"||i=="o"||i=="u"||i=="A"||i=="E"||i=="I"||i=="O"||i=="U"){
           continue
        }else{
            newstr+=i
        }
    }
    return newstr
}
console.log(removed("Hello, how are you"))