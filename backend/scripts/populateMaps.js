const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Map = require("../models/mapModel");

dotenv.config();

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
            imageURL:
              "https://spy-scout.vercel.app/_next/image?url=%2Fimages%2Fsaitama-avatar.png&w=64&q=75",
            location: { x: 655, y: 1725 },
          },
          {
            name: "Luffy",
            imageURL:
              "	https://spy-scout.vercel.app/_next/image?url=%2Fimages%2Fluffy-avatar.png&w=64&q=75",
            location: { x: 1240, y: 2319 },
          },
          {
            name: "Guts",
            imageURL:
              "	https://spy-scout.vercel.app/_next/image?url=%2Fimages%2Fguts-avatar.png&w=64&q=75",
            location: { x: 950, y: 2485 },
          },
          {
            name: "Zombie",
            imageURL:
              "	https://spy-scout.vercel.app/_next/image?url=%2Fimages%2Fmine-zombie.png&w=64&q=75",
            location: { x: 511, y: 900 },
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
            imageURL:
              "https://firebasestorage.googleapis.com/v0/b/wheres-waldo-74fe1.appspot.com/o/game-1%2Fcharacters%2Fraft-man.png?alt=media",
            location: { x: 91, y: 1220 },
          },
          {
            name: "Wizard",
            imageURL:
              "https://firebasestorage.googleapis.com/v0/b/wheres-waldo-74fe1.appspot.com/o/game-1%2Fcharacters%2Fwizard.png?alt=media",
            location: { x: 1443, y: 1850 },
          },
          {
            name: "Dragon",
            imageURL:
              "https://firebasestorage.googleapis.com/v0/b/wheres-waldo-74fe1.appspot.com/o/game-1%2Fcharacters%2Fdragon.png?alt=media",
            location: { x: 1267, y: 1210 },
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
            location: { x: 735, y: 1615 },
          },
          {
            name: "Bender",
            imageURL:
              "	https://alejandrovela-dev.github.io/robot-city/static/media/robot-bender.a9e917e7e1331dcdeac6.webp",
            location: { x: 1197, y: 1330 },
          },
          {
            name: "Goku",
            imageURL:
              "https://alejandrovela-dev.github.io/robot-city/static/media/robot-goku.4b4bde291489d1de33fd.webp",
            location: { x: 1248, y: 1782 },
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
