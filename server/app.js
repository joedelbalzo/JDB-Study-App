const express = require("express");
const app = express();
const path = require("path");
const { Question, CodingQuestion } = require("./db");

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
app.put("/api/questions", async (req, res, next) => {
  try {
    const id = req.body.curr.id;
    const question = await Question.findByPk(id);
    const submit = req.body.submit;
    console.log("correct", question.timesCorrect, "incorrect", question.timesIncorrect);
    if (submit === "correct") {
      await question.update({
        attributes: [question.timesCorrect++],
      });
    } else if (submit === "incorrect") {
      await question.update({
        attributes: [question.timesIncorrect++],
      });
    }
    console.log("correct", question.timesCorrect, "incorrect", question.timesIncorrect);
    res.send(await Question.findAll());
  } catch (err) {
    console.log(err);
  }
});
app.get("/api/codingquestions", async (req, res, next) => {
  try {
    const codingQuestions = await CodingQuestion.findAll();
    res.send(codingQuestions);
  } catch (err) {
    console.log(err);
  }
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

module.exports = app;
