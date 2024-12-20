const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true },
  location: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
});

const highscoreSchema = new mongoose.Schema({
  username: { type: String, required: true },
  highscore: { type: Number, required: true },
});

const mapSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true },
  characters: { type: [characterSchema], required: true },
  highscores: { type: [highscoreSchema], default: [] },
});

const Map = mongoose.model("Map", mapSchema);
module.exports = Map;
