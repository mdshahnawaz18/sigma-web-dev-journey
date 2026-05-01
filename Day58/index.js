function nice(name) {
    console.log("\nHey " + name + "\nYou Are Nice ! \n")
    console.log("Hey " + name + "\nYou Are Good ! \n")
    console.log("Hey " + name + "\nYour T-Shirt Is Nice ! \n")
    console.log("Hey " + name + "\nYour Course Is Good Too ! \n")
}

nice("Shahnawaz");
nice("Rohan");


function sum(a,b,c=4) {
    // console.log(a+b)
    // console.log(a,b,c)
    return a+b+c
}

result1 =sum(2,4)
result2 =sum(1,2)
result3 =sum(1,1,1)

console.log("The sum of these numbers is : ", result1)
console.log("The sum of these numbers is : ", result2)
console.log("The sum of these numbers is : ", result3)

func1 = (x)=>{
    
    console.log("\nI Am An Arrow Function", x)

}

func1(24);
func1(12);
func1(11);