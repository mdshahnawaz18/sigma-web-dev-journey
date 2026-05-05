let a=6

function factorial(number){
    let arr=Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return c
}
console.log(factorial(a))

let fac=1
function facfor(number){
    for (let i = 1; i <= a; i++) {
        fac=fac*i
    }
    return fac
}
console.log(facfor(a))
