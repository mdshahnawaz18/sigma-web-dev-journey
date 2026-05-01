const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'))

// app.get or app/post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about us')
})
app.get('/contact', (req, res) => {
  res.send('Contact us!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // http://localhost:3000/blog/intro-to-js?mode=dark&region=in


    console.log(req.params);  //will output {slug : 'intro-to-js}
    console.log(req.query);   //will output {mode:'dark' , region: 'in'}
    res.send(`hello 2 ${req.params.slug}`) 
})

// app.get('/blog/:slug/:s', (req, res) => {
//     res.send(`hello ${req.params.slug} and ${req.params.s}`)
// })
// app.get('/blog/intro-to-python', (req, res) => {
//     res.send('hello intro-to-python')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
