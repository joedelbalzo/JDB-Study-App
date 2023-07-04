const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const { Question } = require("../db/Question");

app.get("/", async (req, res, next) => {
  try {
    res.send(await Question.findAll());
  } catch (err) {
    err;
  }
});

module.exports = app;
