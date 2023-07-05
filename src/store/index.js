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

const reducer = combineReducers({
  questions,
});

export const fetchQuestions = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/questions");
    dispatch({ type: "SET_QUESTIONS", questions: response.data });
  };
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
