import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, CssBaseline, Paper} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      <div className="App">
        <header className="App-header">
          <Paper>
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          </Paper>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
