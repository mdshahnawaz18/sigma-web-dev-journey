console.log("harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

//By id
// document.getElementById("redbox").style.backgroundColor = "red"

// //It color first matchg selector
// document.querySelector(".box").style.backgroundColor = "green"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach((e) =>{
    // console.log(e)
    e.style.backgroundColor = "blue";
})
