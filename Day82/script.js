async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })
}

function sum(a,b,c,d){
    return a+b+c+d
}

(async function main() {
    // var a1
    console.log(a1);
    
    // let a= await sleep()
    // console.log(a);
    
    // let b= await sleep()
    // console.log(b);

    // let [x,y,...rest] = [1,2,7,8,4,5]
    // console.log(x,y,rest)
    

    let obj = {
        a:10,
        b:12,
        c:24
    }
let {a,b} = obj
console.log(a,b);

let arr = [1,2,4,5]
// console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr));

var a1

})()
