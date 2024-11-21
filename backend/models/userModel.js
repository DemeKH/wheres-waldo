const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    minlength: [3, "Username must be at least 3 characters long"],
    maxlength: [20, "Username cannot be more than 20 characters long"],
    validate: {
      validator: function (value) {
        const usernameRegex = /^[a-zA-Z0-9_-]+$/;
        return usernameRegex.test(value);
      },
      message:
        "Username can only contain letters, numbers, underscores, and hyphens",
    },
  },
  highscores: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
