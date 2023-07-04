const conn = require("./conn");
const Question = require("./Question");
const questionData = require("./questionData");

const syncAndSeed = async () => {
  const [questions] = await Promise.all(
    questionData.map(async (q) => {
      return Question.create({
        category: q.category,
        question: q.question,
        answerOne: q.answerOne,
        answerTwo: q.answerTwo,
        answerThree: q.answerThree,
        answerFour: q.answerFour,
        answerFive: q.answerFive,
        timesCorrect: q.timesCorrect,
        timesIncorrect: q.timesIncorrect,
      });
    })
  );
  return [questions];
};

module.exports = {
  syncAndSeed,
  Question,
};
