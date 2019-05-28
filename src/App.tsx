import React from 'react';
import './App.css';
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import theme from "./theme";
import {Route, Switch} from "react-router";
import {ConnectedRouter} from "connected-react-router";
import store, {history} from "./store";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import {Provider} from "react-redux";
import AdminHtml from "./layouts/AdminHtml";
import LogOutPage from "./pages/LogOutPage";

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/login" component={LogInPage}/>
            <Route exact path="/logout" component={LogOutPage}/>
            <Route exact path="/">
              <AdminHtml pageTitle="Home">
                <HomePage/>
              </AdminHtml>
            </Route>
          </Switch>
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
