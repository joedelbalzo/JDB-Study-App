"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./Home");
var Nav_1 = require("./Nav");
var App = function () {
    return (React.createElement("div", null,
        React.createElement(Nav_1.default, null),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Home_1.default, null) }))));
};
exports.default = App;
