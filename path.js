
// const fs = require('fs');
const path = require('path')
const file = "text/peter.txt"

// fs.writeFileSync("files/peter.txt")
// console.log(path.extreme(file))
console.log(path.dirname(file))
console.log(path.basename(file))

console.log(path.resolve("text","peter.txt"))
console.log(path.isAbsolute(file))

console.log(__dirname)  // these are Constants
console.log(__filename) // these are Constants
