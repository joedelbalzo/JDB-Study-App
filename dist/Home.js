"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var Home = function () {
    var questions = (0, react_redux_1.useSelector)(function (state) { return state.questions; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    console.log(questions);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Hello"),
        ";"));
};
exports.default = Home;
