let a = prompt("Enter First Number")

let b = prompt("Enter Second Number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry This is not allowed")
}

let sum = parseInt(a) + parseInt(b)

// try {
//     console.log('The Sum is ',sum*x);
    
// } catch (error) {
//     console.log("Error aa gaya bhai");
//     alert(error.name)
//     alert(error.message)
//     alert(error.stack)
    
// }


try {
    console.log('The Sum is ',sum*x);
    
} catch (error) {
    console.log("Error aa gaya bhai");
    
}
finally{
    // finally used in function when we want finally after return
    
    console.log("Hello mai finally hu");

}
