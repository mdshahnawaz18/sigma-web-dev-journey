//https://npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let con = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({desc: "Description of this todo", isDone: false, days: Math.floor(Math.random()*48 + Math.random()*72)})
    todo.save()
  res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({days:22})
    console.log('todo',todo);
    
  res.send('This is findone!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
