import * as React from 'react';
import {Button, Theme, WithStyles} from "@material-ui/core";

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import {AppState} from "../../store";
import {SystemState} from "../../store/system/types";
import {updateLogin} from "../../store/system/actions";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {AdapterLink} from "../../utils";

const styles = (theme: Theme) => createStyles({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const mapStateToProps = (state: AppState) => ({
  system: state.system
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: LogOutPageOwnProps): LogOutPageDispatchProps => {
  return {
    logoutAction: () => {
      dispatch(
        updateLogin({
          loggedIn: false,
          userName: "",
          session: ""
        })
      )
    }
  }
};

interface LogOutPageStateProps {
  system: SystemState
}

interface LogOutPageDispatchProps {
  logoutAction: () => void
}

interface LogOutPageOwnProps {

}

type LogOutPageProps = LogOutPageStateProps & LogOutPageDispatchProps & LogOutPageOwnProps & WithStyles<typeof styles>;

class LogOutPage extends React.Component<LogOutPageProps> {

  render() {
    const {classes} = this.props;
    if (!this.props.system.loggedIn) {
      return <Redirect to='/login'/>;
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Log Out
          </Typography>
          <form>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="#"
              size="large"
            >
              Log Out Now
            </Button>
          </form>
          <Button size="small" href="#" component={AdapterLink} to="/" color="secondary">
            Back to Home
          </Button>
        </div>
      </Container>
    )
  }
}

export default withStyles(styles)(
  connect<LogOutPageStateProps, LogOutPageDispatchProps, LogOutPageOwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
  )(LogOutPage)
)
