const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  highscores: {
    type: [Number],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
