h('https://api.github.com/users/hiteshchoudhary')
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