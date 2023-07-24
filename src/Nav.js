import * as React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import CodingQuestions from "./CodingQuestions";
import logo from "./images/download.png";

const Nav = () => {
  return (
    <div className="algo-nav">
      <img
        src={logo}
        style={{
          width: "100px",
          height: "100px",
          WebkitFilter: "invert(100%)",
          filter: "invert(100%)",
        }}
      />
      <Link to={"/"}>multiple choice</Link>
      <Link to={"/codingquestions"}>coding</Link>
    </div>
  );
};

export default Nav;
