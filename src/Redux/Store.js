import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./Reducers/Reducer";

const middleWare = [thunk];
const initialState = {};

const store = createStore(
  combineReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
