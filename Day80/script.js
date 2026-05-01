// let obj = {
//     a: 1,
//     b: "harry"
// }

// console.log(obj)

// let animal = {
//     eats : true
// }
// let rabbit = {
//     jumps : true
// }
// rabbit.__proto__ = animal ; //Sets rabbit.[[prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created")
    }
    eats(){
        console.log('Kha raha hu');
    }
    jumps(){
        console.log('Kood raha hu');
    }
}

class Lion extends Animal{

    constructor(name){
        super(name)
        console.log("Lion Object is created")
    }
}

class User{
    constructor(name){
        this.name = name
    }
    get name(){
        return this.name
    }
    set name(value){
        if (value.length < 4) {
            console.log('Name is too short. ');
            return;            
        }
        this._name = value
    }
}

let user = new User("John");
console.log(user.name);

user.name = "harry"
console.log(user);



let a = new Animal("Bunny");
console.log(a);


let l = new Lion("Shera");
console.log(l);
