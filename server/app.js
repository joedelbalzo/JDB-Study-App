const express = require("express");
const app = express();
const path = require("path");
const { Question } = require("./db");

app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/public", express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

app.get("/api/questions", async (req, res, next) => {
  try {
    const questions = await Question.findAll();
    res.send(questions);
  } catch (err) {
    console.log(err);
  }
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

module.exports = app;
