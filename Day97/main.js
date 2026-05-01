const mongoose = require('mongoose');
const express = require('express')
const Employee = require('./models/Employee.js')
const app = express()
const port = 3000

mongoose.connect("mongodb://localhost:27017/company")
app.set("view engine", "ejs")

const random = (arr)=>{
let rno = Math.floor(Math.random()*arr.length - 1)
return arr[rno]
}
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/generate', async (req, res) => {
  await Employee.deleteMany({})
  let randomName = ["Shahnawaz","Shoaib","Virat","Rohit","Aahil","Shaheen","Afreen"]
  let randomCities = ["Delhi","Chandigarh","Mumbai","Jaipur","Hyderabad","New York"]
  let randomLang = ["Python","C++","JavaScript","Java","Kotlin","HTML"]
  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: random(randomName),
      city: random(randomCities),
      language: random(randomLang),
      salary: Math.floor(Math.random()*80000),
      isManager: Math.random()>0.5?true:false

    })
    console.log('e',e);
    
  }
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
