/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "java",
      "price": "24000",
      "Instructor": "Harry"
    },
    {
      "name": "python",
      "price": "20000",
      "Instructor": "Alice"
    },
    {
      "name": "javascript",
      "price": "18000",
      "Instructor": "Bob"
    },
    {
      "name": "c++",
      "price": "22000",
      "Instructor": "Charlie"
    },
    {
      "name": "ruby",
      "price": "21000",
      "Instructor": "Diana"
    },
    {
      "name": "go",
      "price": "23000",
      "Instructor": "Evan"
    },
    {
      "name": "swift",
      "price": "25000",
      "Instructor": "Fiona"
    },
    {
      "name": "kotlin",
      "price": "19000",
      "Instructor": "George"
    },
    {
      "name": "php",
      "price": "17000",
      "Instructor": "Hannah"
    },
    {
      "name": "typescript",
      "price": "26000",
    }
]);



// Print a message to the output window.
console.log("Done Inserting data");

