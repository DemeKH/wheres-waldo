const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mapRouter = require("./routes/mapRouter");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Helps with connection stability
  })
  .then(() => console.log("DB connection successful!"))
  .catch((error) => {
    console.error("DB connection error:", error.message);
    process.exit(1);
  });

app.use("/api/map", mapRouter);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
