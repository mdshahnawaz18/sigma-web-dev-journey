// console.log('Hey Hello World');



var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a);

// if you prefer something other than '-' as separator
let b = slugify('akjdaakhd1239873 97!@#$$%@#^^', '_')  // some_string
console.log(b);
