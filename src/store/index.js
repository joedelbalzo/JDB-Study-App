import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

const questions = (state = [], action) => {
  if (action.type === "SET_QUESTIONS") {
    return action.questions;
  }
  return state;
};
const codingQuestions = (state = [], action) => {
  if (action.type === "SET_CODING_QUESTIONS") {
    return action.codingQuestions;
  }
  return state;
};

const reducer = combineReducers({
  questions,
  codingQuestions,
});

export const fetchQuestions = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/questions");
    dispatch({ type: "SET_QUESTIONS", questions: response.data });
  };
};
export const fetchCodingQuestions = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/codingquestions");
    dispatch({ type: "SET_CODING_QUESTIONS", codingQuestions: response.data });
  };
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
