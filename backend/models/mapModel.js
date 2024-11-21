const mongoose = require("mongoose");
const validator = require("validator");

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photoURL: { type: String, required: true },
  location: {
    x: { type: Number, required: true }, // X-coordinate in pixels
    y: { type: Number, required: true }, // Y-coordinate in pixels
  },
});

const mapSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
  },
  charachtersToGuess: [characterSchema],
});

const Map = mongoose.model("Map", mapSchema);

module.exports = Map;
