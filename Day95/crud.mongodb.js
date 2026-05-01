use("CrudDb")

// console.log(db);


//create 
db.createCollection("courses")
db.courses.insertOne({
    name:"Shanawaz Web Dev Free Course",
    price: 0,
    assignments : 12,
    projects:24
})

db.courses.insertMany([
    {
      "name": "Shanawaz Web Dev Free Course",
      "price": 0,
      "assignments": 12,
      "projects": 24
    },
    {
      "name": "Shanawaz Python Masterclass",
      "price": 0,
      "assignments": 10,
      "projects": 20
    },
    {
      "name": "Shanawaz JavaScript Bootcamp",
      "price": 0,
      "assignments": 15,
      "projects": 18
    },
    {
      "name": "Shanawaz Data Science Intro",
      "price": 0,
      "assignments": 8,
      "projects": 16
    },
    {
      "name": "Shanawaz Full Stack Course",
      "price": 0,
      "assignments": 20,
      "projects": 30
    },
    {
      "name": "Shanawaz React for Beginners",
      "price": 0,
      "assignments": 9,
      "projects": 12
    },
    {
      "name": "Shanawaz Machine Learning Basics",
      "price": 0,
      "assignments": 11,
      "projects": 14
    },
    {
      "name": "Shanawaz C++ Programming",
      "price": 0,
      "assignments": 13,
      "projects": 17
    }
    
])


//read
let a = db.courses.find({price:0})
// console.log(a);
// console.log(a.count());
// console.log(a.toArray());

let b = db.courses.findOne({price:0})
console.log(b);

//update
db.courses.updateOne({price:0},{$set:{price:100}})

db.courses.updateMany({price:0},{$set:{price:100000}})

//delete
db.courses.deleteOne({price:100})

db.courses.deleteMany({price:100000})
