const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
        minlength: 3
    },
    roll_number:{
        type: String,
        minlength :8,
        maxlength :8,
        required: true,
        unique: [true, "Roll number already exists"],
        },
    email:{
        type: String,
        required: true,
        unique : [true, "Email id already present"],
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error("Invalid Email id")
            }
        }
    },
    password:{
        type: String,
        required: true,
    }           
})

// to create new collection using model
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;
