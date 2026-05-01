let random = Math.random()
console.log(random)

let a = prompt("Enter The First Number : ")
let b = prompt("Enter The Second Number : ")
let c = prompt("Enter The Operation : ")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(random > 0.1){
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}