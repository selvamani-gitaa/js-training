// PROBLEM #5 - STRING
string = "thequickbrownfoxjumpsoverthelazydog"
// Extract the vowels present in the above mentioned strings
vowels=""
for(i of string){
    
    if((i=='a')||(i=='e')||(i=='i')||(i=='o')||(i=='u')){
        vowels+=i
    }
}
console.log(vowels)