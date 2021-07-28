const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, phoneNumber, sex} = req.body;
    console.log(req.body)
    console.log({ firstName, lastName, email, password, phoneNumber, sex})

    const checkEmail = await User.findOne({email});

      if(checkEmail){
        return res.status(404).json({
          status: "failed",
          message: "Email already exists, try another one"
        });
      }

    // hash incoming password from req.body
    // hashedPassword = await bcrypt.hash(password, 12);

    const newUser = { firstName, lastName, email, hashedPassword, phoneNumber, sex};

    const createUser = await User.create(newUser)

    console.log(createUser)
    // sign jwt token with user id as payload
    const token = jwt.sign({ id: createUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // push new user to dummy database

    res.status(201).json({
      status: "success",
      token,
      data: createUser
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
    console.log(err);
  }

  next();
};

exports.getAllUser = (req, res, next) => {
  try {
    const user = User.find();

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err
    }); 
  }
  next();
};
