import { isValidPassword } from "./validators/passwordValidator";
import { isValidEmail } from "./validators/emailValidator";

// import required libraries
const mongoose = require("mongoose");

// define user model
const userSchema = new mongoose.Schema({
  email: {
    unique,
    type: String,
    lowercase: true,
    required: [true, "Please enter an email"],
    validate: {
      validator: isValidEmail,
    },
  },
  pasword: {
    type: String,
    required: [true, "Please enter an valid password"],
    minLength: [8, "Password must be at least 8 characters long"],
    validate: () => isValidPassword,
  },
});

// create some pre and post methods for practice

// create static methods

// static method to login user
