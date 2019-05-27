import * as React from 'react';
import {Button, Paper} from "@material-ui/core";
import {AdapterLink} from "../../utils";

class LogInPage extends React.Component {
  render() {
    return (
      <Paper>
        <h1>Log In</h1>
        <Button component={AdapterLink} to="/">Home</Button>
      </Paper>
    )
  }
}

export default LogInPage
