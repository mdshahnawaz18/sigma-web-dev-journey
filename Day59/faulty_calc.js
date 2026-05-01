let random = Math.random()
console.log(random)

let a = prompt("Enter The First Number : ")
let b = prompt("Enter The Second Number : ")
let c = prompt("Enter The Operation : ")


if (random > 0.1) {
    if (c = "+") {
        console.log("Addition of two numbers is : ", a + b)
    }
    else if (c = '-') {
        console.log("Addition of two numbers is : ", a - b)
    }
    else if (c = '*') {
        console.log("Addition of two numbers is : ", a * b)
    }
    else if (c = '/') {
        console.log("Addition of two numbers is : ", a / b)
    }
}
else {
    if (c = '+') {
        console.log("Addition of two numbers is : ", a - b)
    }
    else if (c = '-') {
        console.log("Addition of two numbers is : ", a + b)
    }
    else if (c = '*') {
        console.log("Addition of two numbers is : ", a / b)
    }
    else if (c = '/') {
        console.log("Addition of two numbers is : ", a ** b)
    }
}