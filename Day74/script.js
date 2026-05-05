let button = document.getElementById("btn")

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "Yay you are clicked <b>I am Shahnawaz</b>"
})
button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "Yay you are double clicked <b>I am Shahnawaz</b>"
})
button.addEventListener("keydown", () => {
    document.querySelector(".box").innerHTML = "you are clicked the key<b>I am Shahnawaz</b>"
})
button.addEventListener("contextmenu", () => {
    document.querySelector(".box").innerHTML = "you are clicked the context menu<b>I am Shahnawaz</b>"
})