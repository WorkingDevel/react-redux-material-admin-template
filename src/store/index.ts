import {combineReducers, createStore} from "redux";
import {systemReducer} from "./system/reducers";
import {devToolsEnhancer} from "redux-devtools-extension";
import {adminHtmlReducer} from "./adminHtml/reducers";

const rootReducer = combineReducers({
  system: systemReducer,
  adminHtml: adminHtmlReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default createStore(
  rootReducer,
  devToolsEnhancer({})
  //composeWithDevTools()
);
