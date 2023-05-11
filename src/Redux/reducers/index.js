import { combineReducers } from "redux";
import characterReducer from "./characterReducer";

const rootReduce = combineReducers({ characterReducer });

export default rootReduce;
