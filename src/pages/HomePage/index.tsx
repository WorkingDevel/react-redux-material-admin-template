import * as React from 'react';
import {Button} from "@material-ui/core";
import {AdapterLink} from "../../utils";
import {AppState} from "../../store";
import {SystemState} from "../../store/system/types";
import {connect} from "react-redux";


interface HomePageStateProps {
  system: SystemState
}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
});

type HomePageProps = HomePageStateProps

class HomePage extends React.Component<HomePageProps> {
  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <Button color="primary" component={AdapterLink}
                to={this.props.system.loggedIn ? "/logout" : "/login"}>
          {this.props.system.loggedIn ? "Log Out" : "Log In"}
        </Button>
      </React.Fragment>
    )
  }
}

export default connect<HomePageStateProps, null, null, AppState>(
  mapStateToProps,
  null
)(HomePage);
