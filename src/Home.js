import React, { useState, useEffect } from "react";
import { fetchQuestions } from "./store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Home = () => {
  const { questions } = useSelector((state) => state);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [oneIsChecked, setOneIsChecked] = useState(false);
  const [twoIsChecked, setTwoIsChecked] = useState(false);
  const [threeIsChecked, setThreeIsChecked] = useState(false);
  const [fourIsChecked, setFourIsChecked] = useState(false);
  const [fiveIsChecked, setFiveIsChecked] = useState(false);
  const dispatch = useDispatch();

  if (!questions) {
    console.log("no questions!");
    return null;
  }
  // else {
  //   console.log("there's clearly questions");
  // }

  useEffect(() => {
    console.log("...fetching");
    dispatch(fetchQuestions());
  }, []);

  useEffect(() => {
    try {
      setCurrentQuestion(questionRandomizer());
    } catch (err) {
      console.log(err);
    }
  }, [questions]);

  //randomizer in js
  let recentlyCorrect = [];
  const correctlyAnsweredRecently = (question) => {
    recentlyCorrect.push(question);
    if (recentlyCorrect.length >= 25) {
      recentlyCorrect.shift();
    }
  };
  const questionRandomizer = () => {
    if (recentlyCorrect.length === 0) {
      // console.log("no length", questions);
      const question = questions[Math.floor(Math.random() * questions.length)];
      return question;
    }
    let notRecentlyCorrect = questions.filter((q) => !recentlyCorrect.includes(q));
    let mostlyCorrect = notRecentlyCorrect.filter((q) => q.timesIncorrect + 5 < q.timesCorrect);
    let mostlyIncorrect = notRecentlyCorrect.filter((q) => q.timesIncorrect + 5 >= q.timesCorrect);
    let random = [...mostlyIncorrect, ...mostlyIncorrect, ...mostlyCorrect];
    return random[Math.floor(Math.random() * random.length)];
  };

  // if (currentQuestion) {
  //   console.log("current", currentQuestion);
  // } else {
  //   console.log("fu");
  // }

  const handleSelectedAnswer = (ev) => {
    console.log(ev);
    console.log(oneIsChecked);
    console.log(twoIsChecked);
  };

  const handleAnswerSubmit = (ev, curr) => {
    ev.preventDefault();
    console.log(curr.timesCorrect, curr.timesIncorrect);
    const correctAnswer = [];
    if (curr.answerOne[0] === "C") {
      correctAnswer.push(true);
    } else correctAnswer.push(false);

    if (curr.answerTwo[0] === "C") {
      correctAnswer.push(true);
    } else correctAnswer.push(false);
    if (curr.answerThree && curr.answerThree[0] === "C") {
      correctAnswer.push(true);
    } else correctAnswer.push(false);
    if (curr.answerFour && curr.answerFour[0] === "C") {
      correctAnswer.push(true);
    } else correctAnswer.push(false);
    if (curr.answerFive && curr.answerFive[0] === "C") {
      correctAnswer.push(true);
    } else correctAnswer.push(false);
    console.log("correct answer array", correctAnswer);
    const checked = [oneIsChecked, twoIsChecked, threeIsChecked, fourIsChecked, fiveIsChecked];

    for (let i = 0; i < correctAnswer.length; i++) {
      if (correctAnswer[i] !== checked[i]) {
        console.log(curr.timesCorrect, curr.timesIncorrect);

        console.log("YOU GOT IT WRONG BABYYYYYYYYYY");
        curr.timesIncorrect++;
        return false;
      }
    }
    curr.timesCorrect++;
    console.log(curr.timesCorrect, curr.timesIncorrect);

    console.log("YOU GOT IT RIGHT!");
    setCurrentQuestion(questionRandomizer());
    setOneIsChecked(false);
    setTwoIsChecked(false);
    setThreeIsChecked(false);
    setFourIsChecked(false);
    setFiveIsChecked(false);
  };

  return (
    <>
      <div className="main-question-div">
        {currentQuestion && (
          <>
            <div className="currentQuestion">{currentQuestion.question}</div>
            <form onSubmit={(ev) => handleAnswerSubmit(ev, currentQuestion)}>
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={oneIsChecked}
                  onChange={(ev) => setOneIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerOne.slice(1)}
              </label>
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={twoIsChecked}
                  onChange={(ev) => setTwoIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerTwo.slice(1)}
              </label>
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={threeIsChecked}
                  onChange={(ev) => setThreeIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerThree.slice(1)}
              </label>
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={fourIsChecked}
                  onChange={(ev) => setFourIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerFour.slice(1)}
              </label>
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={fiveIsChecked}
                  onChange={(ev) => setFiveIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerFive.slice(1)}
              </label>
              {/* Repeat the above block for the remaining answer options */}
              <button type="submit">Submit Answer</button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
