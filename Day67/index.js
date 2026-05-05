console.log("Hello World")

document.firstChild
document.firstElementChild.childNodes
document.firstElementChild.children



document.body

document.body.childNodes
NodeList(7)[text, div.container, text, table, text, script, text]

document.body.childNodes[2]


document.body.childNodes[1].childNodes
NodeList(11)[text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

let cont = document.body.childNodes[1]
undefined

cont

cont.firstChild

cont.lastChild

cont.firstElementChild

cont.lastElementChild

cont.lastElementChild.style.color = "red"

cont.lastElementChild.style.backgroundColor = "Blue"

cont.firstElementChild.style.backgroundColor = "Blue"

cont.firstElementChild.parentElement

cont.firstElementChild.parentNode


document.body.children
HTMLCollection(3) [div.container, table, script]

document.body.children[1]

document.body.children[1].rows
