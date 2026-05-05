let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i)
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}

for (const key in obj) {
    console.log(key)
}
for (const char of "Harry") {
    console.log(char)
}

// let i = 1;
// while (i < 100){
//     console.log(i)
//     i++;
// }

let i = 101;
do{
    console.log(i)
    i++;
}while (i < 100);