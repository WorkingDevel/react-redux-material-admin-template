import * as React from 'react';
import {Button, withStyles, WithStyles} from "@material-ui/core";
import {AdapterLink} from "../../utils";
import {AppState} from "../../store";
import {SystemState} from "../../store/system/types";
import {connect} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {headerStyles} from "../../theme";

interface HomePageStateProps {
  system: SystemState
}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
});

type HomePageProps = WithStyles<typeof headerStyles> & HomePageStateProps

class HomePage extends React.Component<HomePageProps> {
  render() {
    return (
      <React.Fragment>
        <AppBar
          component="div"
          className={this.props.classes.secondaryBar}
          color="primary"
          position="static"
          elevation={0}
        >
          <Tabs value={0} textColor="inherit">
            <Tab textColor="inherit" label="Users"/>
            <Tab textColor="inherit" label="Sign-in method"/>
            <Tab textColor="inherit" label="Templates"/>
            <Tab textColor="inherit" label="Usage"/>
          </Tabs>
        </AppBar>

        <main className={this.props.classes.mainContent}>
          <Button color="primary" component={AdapterLink}
                  to={this.props.system.loggedIn ? "/logout" : "/login"}>
            {this.props.system.loggedIn ? "Log Out" : "Log In"}
          </Button>
        </main>
      </React.Fragment>
    )
  }
}

export default withStyles(headerStyles)(connect<HomePageStateProps, {}, {}, AppState>(
  mapStateToProps,
  {}
)(HomePage));
