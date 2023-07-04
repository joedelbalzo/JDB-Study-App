import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
