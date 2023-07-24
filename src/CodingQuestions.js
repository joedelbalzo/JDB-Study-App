import React, { useState, useEffect } from "react";
import { fetchCodingQuestions } from "./store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CodeRunner from "./CodeRunner";

const CodingQuestions = ({ updateCorrectState, updateIncorrectState, prop }) => {
  const dispatch = useDispatch();
  const { codingQuestions } = useSelector((state) => state);
  const [currentQuestion, setCurrentQuestion] = useState("");
  let [correctThisSession, setCorrectThisSession] = useState(0);
  let [incorrectThisSession, setIncorrectThisSession] = useState(0);
  let [correctState, setCorrectState] = useState([]);

  const handleCorrectChange = (newCorrectState) => {
    setCorrectState(newCorrectState);
    if (correctState === true) {
      handleAnswerSubmit(currentQuestion);
    }
  };

  if (!codingQuestions) {
    console.log("no questions!");
    return null;
  }
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

  useEffect(() => {
    console.log("in the useEffect");
    if (correctState === true) {
      console.log("YOU GOT IT!");
      updateCorrectState((prevState) => prevState + 1);
      currentQuestion.timesCorrect++;
    }
    if (correctState === false) {
      updateIncorrectState((prevState) => prevState + 1);
      currentQuestion.timesIncorrect++;
      return false;
    } else {
      setCorrectState("");
    }
    setCurrentQuestion(questionRandomizer());
  }, [correctState]);

  return (
    <>
      <div className="main-coding-question-div">
        {currentQuestion && (
          <>
            <CodeRunner
              onCorrectChange={handleCorrectChange}
              question={currentQuestion}
              onChange={() => handleAnswerSubmit(currentQuestion)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default CodingQuestions;
