let arr=[1,12,5,4,42,44,68];

// let newArr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
// console.log(newArr)


let newArr = arr.map(e=>{
    return e**2
})
console.log(newArr)

const greaterThanSeven = (e) =>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))


let arr2=[1,4,6,2,8,12]
const red=(a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))
