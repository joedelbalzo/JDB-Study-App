import * as React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import CodingQuestions from "./Coding-Questions";

const Nav = () => {
  return (
    <div className="algo-nav">
      <Link to={"/"} element={<Home />}>
        multiple choice
      </Link>
      <Link to={"/codingquestions"} element={<CodingQuestions />}>
        coding
      </Link>
    </div>
  );
};

export default Nav;
