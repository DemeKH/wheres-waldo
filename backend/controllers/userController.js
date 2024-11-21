const User = require("./../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
    });

    await newUser.save();
    console.log("User created successfully!");
  } catch (err) {
    if (err.name === "ValidationError") {
      console.log("Validation error:", err.errors.username.message);
    } else {
      console.error("Error creating user:", err.message);
    }
  }
};
