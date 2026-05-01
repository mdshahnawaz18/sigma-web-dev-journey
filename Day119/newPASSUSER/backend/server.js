import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req , res)=> {
    res.send('Hello I Am Shahnawaz')
})

app.post('/' , (req , res) => {
    console.log(req.body)
    res.send("Post World")
})

app.listen(port , () =>{
    console.log(`EXample app are listening on the http://localhost:${port}`);
    
})