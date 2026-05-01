const fs = require("fs")
const fsm = require("fs/promises")
// console.log('Starting');
// fs.writeFileSync("harry.txt", "harry is a good boy")
// console.log('Ending');

fs.writeFile("harry2.txt", "Shahnawaz is a smart boy", () => {
    console.log('Done')
    fs.readFile("harry2.txt", (error, data) => {
        console.log(error, data.toString());

    })
})

 fs.appendFile("harry.txt", "harryRobo", (e, d)=>{
    console.log(d);
    
})

console.log('Ending');

