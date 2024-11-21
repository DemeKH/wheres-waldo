const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/get-data", (req, res) => {
  res.status(200).json({ status: "success", data: "empty" });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
