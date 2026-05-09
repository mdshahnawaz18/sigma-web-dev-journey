import express from 'express';
const app = express()
import mongoose from 'mongoose';
import Employee from './models/Employee.js';

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine','ejs');

const getRandom = (arr) =>{
  let rno = Math.floor(Math.random()* (arr.length - 1))
  return arr[rno]
}

app.get('/', (req, res) => {
  res.render('index',{foo: 'Amazon'})
})

app.get('/generate', async (req, res) => {
  //clear the collection
  await Employee.deleteMany({})
  //Generate random data
  let randomNames = ["Shahnawaz","Shoaib","Virat","Rohit"]
  let randomLang = ["Python","Js","C++","Kotlin"]
  let randomCities = ["Delhi","Punjab","Mumbai","Bihar"]
  for (let index = 0; index < 10; index++) {
      let e = await Employee.create({
        name : getRandom(randomNames),
        salary : Math.floor(Math.random()*40000),
        language : getRandom(randomLang),
        city: getRandom(randomCities),
        isManager: Math.random()>0.5?true:false
      })
      console.log('e',e);
      
  }
    res.render('index',{foo: 'this is search'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
