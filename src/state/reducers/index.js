import { combineReducers } from "redux";
import postsReducers from "./postsReducers";

const reducers = combineReducers({
  posts: postsReducers
})

export default reducers;
