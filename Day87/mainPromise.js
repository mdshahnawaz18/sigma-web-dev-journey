import fs from "fs/promises"

let a =  await fs.readFile("harry.txt")

// let b = await fs.writeFile("harry.txt","\n\nShahnawaz is a good boy")
let c = await fs.appendFile("harry.txt","\n\nShahnawaz is a good boy")
console.log(a.toString());
