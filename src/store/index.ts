import {combineReducers, createStore} from "redux";
import {systemReducer} from "./system/reducers";
import {devToolsEnhancer} from "redux-devtools-extension";

const rootReducer = combineReducers({
  system: systemReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default createStore(
  rootReducer,
  devToolsEnhancer({})
  //composeWithDevTools()
);
