const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const EmployeeSchema = new Schema({
  name : String,
  city : String,
  language : String,
  salary: String,
  isManager : Boolean

});

const Employee = model('Employee', EmployeeSchema);
module.exports = Employee;