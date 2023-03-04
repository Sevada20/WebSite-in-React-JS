import { applyMiddleware, combineReducers, createStore } from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./users-reducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
const reducers = combineReducers({
  profilePage: profilePageReducer,
  messagePage: messagePageReducer,
  sitebar: sitebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
