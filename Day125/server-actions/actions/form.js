"use server"
import fs from "fs/promises";


export const submitAction = async (e) => {
  console.log(`My Name Is ${e.get("name")} and I live in ${e.get("add")}`);
  let a = await fs.writeFile("shahnawaz.txt" , `My Name Is ${e.get("name")} and I live in ${e.get("add")}`)
 
  
}