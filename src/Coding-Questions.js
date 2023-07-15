import React, { useState, useEffect } from "react";
import { fetchCodingQuestions } from "./store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CodeRunner from "./CodeRunner";

const Home = () => {
  const { codingQuestions } = useSelector((state) => state);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  let [correctThisSession, setCorrectThisSession] = useState(0);
  let [incorrectThisSession, setIncorrectThisSession] = useState(0);
  const [correctState, setCorrectState] = useState(false);

  const handleCorrectChange = (newCorrectState) => {
    setCorrectState(newCorrectState);
    if (correctState === true) {
      ("");
      handleAnswerSubmit(currentQuestion);
    }
  };

  const dispatch = useDispatch();

  if (!codingQuestions) {
    console.log("no questions!");
    return null;
  }

  // if (correct) {
  //   console.log(correct);
  // }

  useEffect(() => {
    console.log("...fetching");
    dispatch(fetchCodingQuestions());
  }, []);

  useEffect(() => {
    try {
      setCurrentQuestion(questionRandomizer());
    } catch (err) {
      console.log(err);
    }
  }, [codingQuestions]);

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
      const question = codingQuestions[Math.floor(Math.random() * codingQuestions.length)];
      return question;
    }
    let notRecentlyCorrect = codingQuestions.filter((q) => !recentlyCorrect.includes(q));
    let mostlyCorrect = notRecentlyCorrect.filter((q) => q.timesIncorrect + 5 < q.timesCorrect);
    let mostlyIncorrect = notRecentlyCorrect.filter((q) => q.timesIncorrect + 5 >= q.timesCorrect);
    let random = [...mostlyIncorrect, ...mostlyIncorrect, ...mostlyCorrect];
    return random[Math.floor(Math.random() * random.length)];
  };

  const handleAnswerSubmit = async (curr) => {
    console.log("in the handleAnswerSubmit function");
    if (correctState === true) {
      curr.timesCorrect++;
      correctThisSession === 0
        ? setCorrectThisSession(1)
        : setCorrectThisSession((correctThisSession = correctThisSession + 1));
      console.log(curr.timesCorrect, curr.timesIncorrect);
      console.log("YOU GOT IT RIGHT!");
      await setCurrentQuestion(questionRandomizer());
    } else {
      curr.timesIncorrect++;
      incorrectThisSession === 0
        ? setIncorrectThisSession(1)
        : setIncorrectThisSession((incorrectThisSession = incorrectThisSession + 1));
      await setCurrentQuestion(questionRandomizer());
      return false;
    }
  };

  correctState ? console.log(correctState) : "";

  return (
    <>
      <div className="main-coding-question-div">
        {currentQuestion && (
          <>
            {console.log(currentQuestion)}

            {/* <div className="currentQuestion">{currentQuestion.question}</div> */}
            {currentQuestion.codeSnippet ? (
              <div id="codesnippet">
                <pre>{currentQuestion.codeSnippet}</pre>
              </div>
            ) : (
              ""
            )}
            {/* <form onSubmit={(ev) => handleAnswerSubmit(ev, currentQuestion)}> */}
            <CodeRunner
              onCorrectChange={handleCorrectChange}
              question={currentQuestion}
              onChange={() => handleAnswerSubmit(currentQuestion)}
            />
            {/* <button type="submit">Submit Answer</button>
            </form> */}
          </>
        )}
      </div>
      <p>Correct:{correctThisSession}</p>
      <p>Incorrect:{incorrectThisSession}</p>
    </>
  );
};

export default Home;
