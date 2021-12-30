import { applyMiddleware, combineReducers, createStore } from "redux";
import { HomeReducer } from "./homeReducer/HomeReducer";
import reduxThunk from "redux-thunk";
const rootReducer = combineReducers({
  HomeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
