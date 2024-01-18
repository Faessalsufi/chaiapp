require("dotenv").config();

const express = require("express");
const app = express();
const port = 6000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Welcome to twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1 style='background-color:yellow'>Please login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Youtube Channel</h2>");
});

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
