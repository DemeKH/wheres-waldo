const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Map = require("../models/mapModel"); // Adjust path as needed

dotenv.config();

// Database connection
const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

const populateMaps = async () => {
  try {
    await Map.deleteMany();
    console.log("Existing maps cleared!");

    const maps = [
      {
        name: "Universe11 Infested",
        imageURL:
          "https://spy-scout.vercel.app/images/universe11-infested.jpeg",
        characters: [
          {
            name: "Saitama",
            photoURL: "https://example.com/characters/waldo.jpg",
            location: { x: 345, y: 672 },
          },
          {
            name: "Luffy",
            photoURL: "https://example.com/characters/wizard.jpg",
            location: { x: 123, y: 456 },
          },
          {
            name: "Guts",
            photoURL: "https://example.com/characters/waldo.jpg",
            location: { x: 345, y: 672 },
          },
          {
            name: "Zombie",
            photoURL: "https://example.com/characters/wizard.jpg",
            location: { x: 123, y: 456 },
          },
        ],
      },
      {
        name: "Dragon Charmers Island",
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/wheres-waldo-74fe1.appspot.com/o/game-1%2Fbackground%2Fdragon-charmers-island.webp?alt=media&token=9b698d26-a9ad-45c4-aa42-926ef9500de6",
        characters: [
          {
            name: "Raft Man",
            photoURL:
              "https://alejandrovela-dev.github.io/robot-city/static/media/main-robotcity.21aef22c39fb3661f853.webp",
            location: { x: 512, y: 134 },
          },
          {
            name: "Wizard",
            photoURL:
              "https://firebasestorage.googleapis.com/v0/b/wheres-waldo-74fe1.appspot.com/o/game-1%2Fcharacters%2Fwizard.png?alt=media&token=efbb508b-4cce-432d-920c-50297f9565e6",
            location: { x: 512, y: 134 },
          },
          {
            name: "Dragon",
            photoURL:
              "https://firebasestorage.googleapis.com/v0/b/wheres-waldo-74fe1.appspot.com/o/game-1%2Fcharacters%2Fwizard.png?alt=media&token=efbb508b-4cce-432d-920c-50297f9565e6",
            location: { x: 512, y: 134 },
          },
        ],
      },
      {
        name: "Robot City",
        imageURL:
          "https://alejandrovela-dev.github.io/robot-city/static/media/main-robotcity.21aef22c39fb3661f853.webp",
        characters: [
          {
            name: "Robot Sentinel",
            imageURL:
              "https://alejandrovela-dev.github.io/robot-city/static/media/robot-sentinel.141b234b60ab58570fd7.webp",
            location: { x: 512, y: 134 },
          },
          {
            name: "Robot Sentinel",
            imageURL:
              "https://alejandrovela-dev.github.io/robot-city/static/media/robot-sentinel.141b234b60ab58570fd7.webp",
            location: { x: 512, y: 134 },
          },
          {
            name: "The Doof Warrior",
            imageURL:
              "https://alejandrovela-dev.github.io/robot-city/static/media/robot-thedoofwarrior.6e760ecfca88b77085a2.webp",
            location: { x: 512, y: 134 },
          },
        ],
      },
    ];

    await Map.insertMany(maps);
    console.log("Maps populated successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error populating maps:", error);
    process.exit(1);
  }
};

populateMaps();
