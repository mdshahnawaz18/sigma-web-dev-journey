document.querySelector(".box")

document.querySelector(".box").innerHTML
document.querySelector(".box").outerHTML
document.querySelector(".box").innerText

document.querySelector(".container").innerHTML
document.querySelector(".container").outerHTML
document.querySelector(".container").innerText

document.querySelector(".container").textContent

document.querySelector(".container").tagName

document.querySelector(".container").nodeName

// document.querySelector(".container").hidden

// document.querySelector(".container").hidden=true

document.querySelector(".box").innerHTML ="I am a Shahnawaz"

document.querySelector(".box").hasAttribute("style")

document.querySelector(".box").getAttribute("style")

document.querySelector(".container").hasAttribute("style")

document.querySelector(".box").setAttribute("style","display:inline")

document.querySelector(".box").attributes

document.querySelector(".box").removeAttribute("style")

document.querySelector(".box").dataset


// let div = document.createElement("div");
// div.innerHTML = "I have been inserted <b>by SHAHNAWAZ</b>"
// div.setAttribute("class","created");
// document.querySelector(".container").before(div);


let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<b>I am under water , please help me </b>")

document.querySelector(".box").remove()