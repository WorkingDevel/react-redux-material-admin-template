import * as React from 'react';
import {Button} from "@material-ui/core";
import {AdapterLink} from "../../utils";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <Button component={AdapterLink} to="/login">Log In</Button>
      </React.Fragment>
    )
  }
}

export default HomePage
