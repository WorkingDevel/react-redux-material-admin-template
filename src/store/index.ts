import {applyMiddleware, combineReducers, createStore} from "redux";
import {systemReducer} from "./system/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {adminHtmlReducer} from "./adminHtml/reducers";
import {createBrowserHistory, History} from "history";
import {connectRouter, routerMiddleware} from 'connected-react-router'

const rootReducer = (history: History) => combineReducers({
  system: systemReducer,
  adminHtml: adminHtmlReducer,
  router: connectRouter(history)
});

export const history = createBrowserHistory();

const rootReducerInstance = rootReducer(history);

export type AppState = ReturnType<typeof rootReducerInstance>

export default createStore(
  rootReducerInstance,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
    )
  )
);
