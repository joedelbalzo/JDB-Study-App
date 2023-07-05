"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var client_1 = require("react-dom/client");
var App_1 = require("./App");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var react_router_dom_1 = require("react-router-dom");
var root = (0, client_1.createRoot)(document.querySelector("#root"));
root.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(react_router_dom_1.HashRouter, null,
        React.createElement(App_1.default, null))));
