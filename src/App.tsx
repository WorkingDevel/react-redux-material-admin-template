import React from 'react';
import './App.css';
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import theme from "./theme";
import {Redirect, Route, Switch} from "react-router";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import AdminHtml from "./layouts/AdminHtml";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <Switch>
            <Route exact path="/login" component={LogInPage}/>
            <Route exact path="/logout" render={() => (
              <Redirect to="/"/>
            )}/>
            <Route exact path="/">
              <AdminHtml pageTitle="Home">
                <HomePage/>
              </AdminHtml>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
