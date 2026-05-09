const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000
const fs = require('fs')


app.use(express.static("public"))
app.use('/blog', blog)

//Middleware 1
app.use((req, res, next) => {
    console.log(req.headers);
    req.shahnawaz = "I am shahnawaz"
    fs.appendFileSync("logs.txt",`${Date.now()}is a ${req.method}\n`)
    console.log(`${Date.now()}is a ${req.method}`);
    next()
})

// app.use((req,res, next) => {
    //     console.log(`${Date.now()}is a ${req.method}`);
    //     // res.send('Hello This is middleware 1')
    //     next()
    // })
    
    // app.use((req,res, next) => {
        //     console.log(`${Date.now()}is a ${req.method}`);
        //     console.log('m1');
        
        //     next()
        // })
        
        //Middleware 2
app.use((req, res, next) => {
            console.log('m2');
            req.shahnawaz = "I am shoaib"
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('about us'+" and " + req.shahnawaz)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
