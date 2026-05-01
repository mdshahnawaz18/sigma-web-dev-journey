console.log('This is promises');

let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporting you")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done")
            resolve("harry")
        },3000);
    }
})
let prom2 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporting you")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("harry 2")
        },1000);
    }
})
let prom3 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporting you")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done 3")
            resolve("harry 3")
        },1000);
    }
})
let prom4 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporting you")
    }
    else{

        setTimeout(() => {
            console.log("Yes I am done 4")
            resolve("harry 4")
        },1000);
    }
})

// prom1.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })


// let p5 = Promise.all([prom1,prom2,prom3,prom4])

// p5.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })



// let p5 = Promise.race([prom1,prom2,prom3,prom4])

// p5.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })


// let p5 = Promise.allSettled([prom1,prom2,prom3,prom4])

// p5.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })


let p5 = Promise.any([prom1,prom2,prom3,prom4])

p5.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
