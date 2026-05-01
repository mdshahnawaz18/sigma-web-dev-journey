const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Shahnawaz",1,54,644]
    res.render("index", {siteName: siteName, searchText: searchText , arr })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas"
    let blogContent = "Search Now"
    res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
