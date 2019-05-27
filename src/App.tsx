import React from 'react';
import './App.css';
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import theme from "./theme";
import {Route, Switch} from "react-router";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/login" component={LogInPage}/>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
