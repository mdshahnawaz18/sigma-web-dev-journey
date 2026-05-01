let obj1 = {
    1 :"Crazy ",
    2 : "Amazing ",
    3 : "Fire "
}

let obj2 = {
1 : "Engine ",
2 : "Foods ",
3 : "Garments "
}
let obj3 = {
1 : "Bros🛒",
2 : "Limited🌍",
3 : "Hub🖥️"
}


let random1 = Math.floor(Math.random()*3+1)
let random2 = Math.floor(Math.random()*3+1)
let random3 = Math.floor(Math.random()*3+1)

console.log("Random No. 1 : " , random1)
console.log("Random No. 2 : " , random2)
console.log("Random No. 3 : " , random3)

console.log(`The Name Of The Company Is : ${obj1[random1]} ${obj2[random2]} ${obj1[random3]}`)
