const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4700;

// Connect to the MongoDB server
mongoose.connect("mongodb://localhost:27017/node-authentication");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
  // Perform operations here
});

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
