import React, { useState, useEffect } from "react";
import { fetchQuestions } from "./store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const MCQ = ({ updateCorrectState, updateIncorrectState }) => {
  const { questions } = useSelector((state) => state);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [oneIsChecked, setOneIsChecked] = useState(false);
  const [twoIsChecked, setTwoIsChecked] = useState(false);
  const [threeIsChecked, setThreeIsChecked] = useState(false);
  const [fourIsChecked, setFourIsChecked] = useState(false);
  const [fiveIsChecked, setFiveIsChecked] = useState(false);
  const [recentlyCorrect, setRecentlyCorrect] = useState([]);
  const dispatch = useDispatch();

  if (!questions) {
    console.log("no questions!");
    return null;
  }

  // useEffect(() => {
  //   console.log("...fetching");
  //   dispatch(fetchQuestions());
  // }, []);

  useEffect(() => {
    try {
      setCurrentQuestion(questionRandomizer());
    } catch (err) {
      console.log(err);
    }
  }, [questions]);

  //randomizer in js
  const correctlyAnsweredRecently = (question) => {
    setRecentlyCorrect((prevRecentlyCorrect) => {
      if (prevRecentlyCorrect.length >= 25) {
        return [...prevRecentlyCorrect.slice(1), question];
      }
      return [...prevRecentlyCorrect, question];
    });
  };

  const questionRandomizer = () => {
    if (recentlyCorrect.length === 0) {
      console.log(recentlyCorrect);
      const question = questions[Math.floor(Math.random() * questions.length)];
      return question;
    }
    let notRecentlyCorrect = questions.filter((q) => !recentlyCorrect.includes(q));
    let mostlyCorrect = notRecentlyCorrect.filter((q) => q.timesIncorrect + 5 < q.timesCorrect);
    let mostlyIncorrect = notRecentlyCorrect.filter((q) => q.timesIncorrect + 5 >= q.timesCorrect);
    let random = [...mostlyIncorrect, ...mostlyIncorrect, ...mostlyCorrect];
    return random[Math.floor(Math.random() * random.length)];
  };

  const handleAnswerSubmit = async (ev, curr) => {
    ev.preventDefault();
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
    const checked = [oneIsChecked, twoIsChecked, threeIsChecked, fourIsChecked, fiveIsChecked];

    let correct = true;
    for (let i = 0; i < correctAnswer.length; i++) {
      if (correctAnswer[i] === checked[i]) {
        correct = true;
      } else if (correctAnswer[i] !== checked[i]) {
        updateIncorrectState((prevState) => prevState + 1);
        curr.timesIncorrect++;
        correct = false;
        break;
      }
    }
    if (correct === true) {
      updateCorrectState((prevState) => prevState + 1);
      curr.timesCorrect++;
    }
    await setCurrentQuestion(questionRandomizer());
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
            {currentQuestion.codeSnippet ? (
              <div id="codesnippet">
                <pre>{currentQuestion.codeSnippet}</pre>
              </div>
            ) : (
              ""
            )}
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
              {currentQuestion.answerFive ? (
                <label>
                  <input
                    id="checkbox"
                    type="checkbox"
                    checked={fiveIsChecked}
                    onChange={(ev) => setFiveIsChecked(ev.target.checked)}
                  />
                  {currentQuestion.answerFive.slice(1)}
                </label>
              ) : (
                ""
              )}
              <button type="submit" className="run-button">
                Submit Answer
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default MCQ;
