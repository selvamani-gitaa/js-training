// Problem 28: Objects
// Create an empty object called "library".
// Add the following books to the library:
// Title: "Book A", Author: "Author 1"
// Title: "Book B", Author: "Author 2"
// Title: "Book C", Author: "Author 3"
// Retrieve and store the author of the book "Book B" in a variable called "author".
// Get an array of all the book titles in the library and store it in a variable called
// "titles".

const library={
    'Book A' : 'Author 1',
    'Book B' : 'Author 2',
    'Book C' : 'Author 3',
}
let author=library["Book B"]
console.log(author)
let arr=library
console.log(arr)