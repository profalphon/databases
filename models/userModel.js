const express = require ("express")
const mongoose = require("mongoose")
const {Schema} = mongoose
//or const schema - mongoose.Schema


// const router = Express.router();
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String,
    sex: String
  });


// exports.User = [
//   {
//     id: "1",
//     firstName: "Peter",
//     lastName: "Nathan",
//     email: "amelia56565.com",
//     password: "test1234",
//     phoneNumber:"08037917446",
//     sex: 'M'
//   },
// ];

const User = mongoose.model("User", userSchema);


module.exports = User;
