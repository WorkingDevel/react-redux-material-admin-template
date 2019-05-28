import React from 'react';
import './App.css';
import {CssBaseline, Typography} from '@material-ui/core';
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
            <Route exact path="/auth">
              <AdminHtml pageTitle="Authentication">
                <Typography component="h1">
                  Space for Content in Authentication
                </Typography>
              </AdminHtml>
            </Route>
            <Route exact path="/dev/db">
              <AdminHtml pageTitle="Database">
                <Typography component="h1">
                  Space for Content in Database
                </Typography>
              </AdminHtml>
            </Route>
            <Route exact path="/dev/storage">
              <AdminHtml pageTitle="Storage">
                <Typography component="h1">
                  Space for Content in Storage
                </Typography>
              </AdminHtml>
            </Route>
            <Route exact path="/dev/hosting">
              <AdminHtml pageTitle="Hosting">
                <Typography component="h1">
                  Space for Content in Hosting
                </Typography>
              </AdminHtml>
            </Route>
            <Route exact path="/dev/functions">
              <AdminHtml pageTitle="Functions">
                <Typography component="h1">
                  Space for Content in Functions
                </Typography>
              </AdminHtml>
            </Route>
            <Route exact path="/dev/mlkit">
              <AdminHtml pageTitle="ML Kit">
                <Typography component="h1">
                  Space for Content in ML Kit
                </Typography>
              </AdminHtml>
            </Route>
            <Route exact path="/qm/analytics">
              <AdminHtml pageTitle="Analytics">
                <Typography component="h1">
                  Space for Content in Analytics
                </Typography>
              </AdminHtml>
            </Route>
            <Route exact path="/qm/performance">
              <AdminHtml pageTitle="Performance">
                <Typography component="h1">
                  Space for Content in Performance
                </Typography>
              </AdminHtml>
            </Route>
            <Route exact path="/qm/lab">
              <AdminHtml pageTitle="Lab">
                <Typography component="h1">
                  Space for Content in Lab
                </Typography>
              </AdminHtml>
            </Route>
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
