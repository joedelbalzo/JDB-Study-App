import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import CodingQuestions from "./Coding-Questions";
import { fetchQuestions } from "./store";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/codingquestions" element={<CodingQuestions />} />
      </Routes>
    </div>
  );
};

export default App;
