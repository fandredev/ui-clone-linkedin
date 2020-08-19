import { createStore, combineReducers } from "redux";
import shimmerReducer from "../store/shimmer/reducer";

const reducers = combineReducers({ shimmer: shimmerReducer });
export default createStore(reducers);
