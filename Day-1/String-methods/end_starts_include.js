// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)

let x='Bali is predominantly a Hindu country. Bali is known for its elaborate, traditional dancing. The dancing is inspired by its Hindi beliefs. Most of the dancing portrays tales of good versus evil. To watch the dancing is a breathtaking experience. Lombok has some impressive points of interest – the majestic Gunung Rinjani is an active volcano. It is the second highest peak in Indonesia. Art is a Balinese passion. Batik paintings and carved statues make popular souvenirs. Artists can be seen whittling and painting on the streets, particularly in Ubud. It is easy to appreciate each island as an attractive tourist destination. Majestic scenery; rich culture; white sands and warm, azure waters draw visitors like magnets every year. Snorkelling and diving around the nearby Gili Islands is magnificent. Marine fish, starfish, turtles and coral reef are present in abundance. Bali and Lombok are part of the Indonesian archipelago.'
console.log(x.endsWith('o.'))

// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.startsWith(substring)

console.log(x.startsWith('B'))

// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.

console.log(x.includes('Bali'))