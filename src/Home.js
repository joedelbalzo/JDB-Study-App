import React, { useState, useEffect } from "react";
import { fetchQuestions } from "./store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import MCQ from "./MCQ";
import CodingQuestions from "./CodingQuestions";

const Home = () => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  let [correctThisSession, setCorrectThisSession] = useState(0);
  let [incorrectThisSession, setIncorrectThisSession] = useState(0);
  const [recentlyCorrect, setRecentlyCorrect] = useState([]);
  const [correctClass, setCorrectClass] = useState("");
  const [correctState, setCorrectState] = useState(0);
  const [incorrectState, setIncorrectState] = useState(0);

  const currentPath = window.location.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
    setCorrectClass("");
    console.log(JSON.parse(localStorage.getItem("numberCorrect")));
    setCorrectThisSession(JSON.parse(localStorage.getItem("numberCorrect")));
    setIncorrectThisSession(JSON.parse(localStorage.getItem("numberIncorrect")));
  }, []);
  //insert local storage functions here

  useEffect(() => {
    setCorrectClass("correct");
    setCorrectThisSession(correctThisSession + 1);
    localStorage.setItem("numberCorrect", correctState);
    localStorage.setItem("questionsCorrect", JSON.stringify(recentlyCorrect));
  }, [correctState]);

  useEffect(() => {
    setCorrectClass("incorrect");
    setIncorrectThisSession(incorrectThisSession + 1);
    localStorage.setItem("numberIncorrect", incorrectState);
  }, [incorrectState]);

  useEffect(() => {
    correctClass !== "" ? setTimeout(() => setCorrectClass(""), 2500) : setCorrectClass("");
  }, [correctClass]);

  //randomizer in js
  const correctlyAnsweredRecently = (question) => {
    setRecentlyCorrect((prevRecentlyCorrect) => {
      if (prevRecentlyCorrect.length >= 25) {
        return [...prevRecentlyCorrect.slice(1), question];
      }
      return [...prevRecentlyCorrect, question];
    });
  };

  const clearStats = () => {
    setCorrectThisSession(0);
    setIncorrectThisSession(0);
    setRecentlyCorrect([]);
    setCorrectClass("");
    localStorage.removeItem("numberCorrect");
    localStorage.removeItem("numberIncorrect");
    localStorage.removeItem("questionsCorrect");
  };

  console.log(setCorrectState, setIncorrectState);
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <MCQ updateCorrectState={setCorrectState} updateIncorrectState={setIncorrectState} />
          }
        />
        <Route
          path="/codingquestions"
          element={
            <CodingQuestions
              updateCorrectState={setCorrectState}
              updateIncorrectState={setIncorrectState}
              prop={123}
            />
          }
        />
      </Routes>

      <div className="mcq-stats">
        <button
          className={correctClass === "correct" ? "correct-answer" : "correct-stats-button"}
          style={{ flex: 1 }}
        >
          Correct:{correctThisSession}
        </button>
        <button
          className={correctClass === "incorrect" ? "incorrect-answer" : "incorrect-stats-button"}
          style={{ flex: 1 }}
        >
          Incorrect:{incorrectThisSession}
        </button>
        <button className="clear-stats-button" style={{ flex: 1 }} onClick={clearStats}>
          Clear Stats
        </button>{" "}
      </div>
    </>
  );
};

export default Home;
