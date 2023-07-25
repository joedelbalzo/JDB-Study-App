import * as React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import CodingQuestions from "./CodingQuestions";
import logo from "./images/logorectangle.png";

const Nav = () => {
  return (
    <div className="algo-nav">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={logo}
          style={{
            width: "60px",
            height: "auto",
            WebkitFilter: "invert(100%)",
            filter: "invert(100%)",
          }}
        />
        <span style={{ fontVariant: "small-caps" }}>AlgoRhythm</span>
      </div>
      <Link to={"/"}>multiple choice</Link>
      <Link to={"/codingquestions"}>coding</Link>
    </div>
  );
};

export default Nav;
