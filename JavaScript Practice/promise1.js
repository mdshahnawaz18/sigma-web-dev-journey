// const response = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('promise 1 is complete');
//         resolve()
//     }, 1000)
// })
// response.then(function () {
//     console.log('response then complete');
// })


// const response = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('promise 1 is complete');
//         resolve({ name: "Shahnawaz", password: 1234 })
//     }, 1000)
// })
// response.then(function (user) {
//     console.log(user);

//     console.log('response then complete');
// })


// const response = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('promise 1 is complete');
//         resolve({ name: "Shahnawaz", password: 1234 })
//     }, 1000)
// })
// response.then(function (user) {
//     // console.log(user);
//     return user.name
// })
// .then(function(name){
// console.log(name);

// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('promise 1 is complete');
//         resolve({ name: "Shahnawaz", password: 1234 })
//     }, 1000)
// }).then(function (user) {
//     // cons/(user.password);
//     return user.name
// })
// .then(function(name){
// console.log(name);

// })


// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false

//         if (!error) {
//             console.log('promise 1 is complete');
//             resolve({ name: "Shahnawaz", password: "1234" })
//         }
//         else {
//             reject('error : javascript error')
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.password;
// })
//     .then((pass) => {
//         console.log(pass);

//     })
//     .catch(function (error) {
//         console.log(error);
//     })



// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false

//         if(!error){
//         console.log('promise 1 is complete');
//         resolve({ name: "Shahnawaz", password: "1234" })
//         }
//         else{
//             reject('error : javascript error');
//         }
//     }, 1000)
// })
// .then(function (user) {
//     console.log(user);
//     console.log(user.password);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log('Finally is print');

// })



// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false

//         if (!error) {
//             resolve({ name: "Shahnawaz", password: "1234" })
//         }
//         else {
//             reject('Error : Kyu aya')
//         }
//     },1000)
//     });

//     async function consumerPromiseFive() {
//         try{
//            const response = await promiseFive
//            console.log(response);
//            console.log('start1');

//         }
//         catch(error){
//             console.log(error);
//         }
//     }
//     consumerPromiseFive()




//async function with fetch api


// async function getAllUsers() {
//     try{
//         console.log('Start');
        
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//         console.log('End');
        

//     }
//     catch(error){
//         console.log('Error : ',error);   
//     }

// }
// getAllUsers()


        

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
    return response.json()
})
.then(function(data){
console.log(data);
return data.followers
})
.then(function(follow){
console.log(follow);
})
.catch((error)=>{
    console.log(error);
    
})