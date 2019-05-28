import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputIcon from '@material-ui/icons/Input';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import {WithStyles, withStyles} from '@material-ui/core';
import {headerStyles} from "../../theme";
import {AdapterLink} from "../../utils";
import {AppState} from "../../store";
import {SystemState} from "../../store/system/types";
import {connect} from "react-redux";

const mapStateToProps = (state: AppState) => ({
  system: state.system
});

interface AdminHeaderStateProps {
  system: SystemState
}

interface AdminHeaderOwnProps extends WithStyles<typeof headerStyles> {
  onDrawerToggle: () => void,
  title: string
}

type AdminHeaderProps = WithStyles<typeof headerStyles> & AdminHeaderOwnProps & AdminHeaderStateProps

class AdminHeader extends React.Component<AdminHeaderProps> {

  private userBar() {
    const {classes, system} = this.props;
    if (system.loggedIn) {
      return (
        <React.Fragment>
          <Grid item>
            <Tooltip title="Alerts • No alters">
              <IconButton color="inherit">
                <NotificationsIcon/>
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Typography component="h3">
              {system.userName}
            </Typography>
          </Grid>
          <Grid item>
            <Tooltip title="Log Out">
              <IconButton color="inherit" className={classes.iconButtonAvatar} component={AdapterLink} to="/logout"
                          href="#">
                <AccountCircleIcon fontSize="large"/>
              </IconButton>
            </Tooltip>
          </Grid>
        </React.Fragment>
      )
    } else

      return (
        <React.Fragment>
          <Grid item>
            <Tooltip title="Log In">
              <IconButton color="inherit" className={classes.iconButtonAvatar} component={AdapterLink} to="/login"
                          href="#">
                <InputIcon fontSize="large"/>
              </IconButton>
            </Tooltip>
          </Grid>
        </React.Fragment>
      )
  }

  render() {
    const {classes, onDrawerToggle, title} = this.props;

    return (
      <React.Fragment>
        <AppBar color="primary" position="sticky" elevation={0}>
          <Toolbar>
            <Grid container spacing={1} alignItems="center">
              <Hidden smUp>
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={onDrawerToggle}
                    className={classes.menuButton}
                    href="#"
                  >
                    <MenuIcon/>
                  </IconButton>
                </Grid>
              </Hidden>
              <Grid item xs>
                <Typography color="inherit" variant="h5">
                  {title}
                </Typography>
              </Grid>

              <Grid item>
                <Typography className={classes.link}>
                  Go to docs
                </Typography>
              </Grid>
              {this.userBar()}
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar
          component="div"
          className={classes.secondaryBar}
          color="secondary"
          position="static"
          elevation={0}
        >
          <Toolbar>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Button className={classes.button} variant="outlined" color="inherit" size="small">
                  Web setup
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="Help">
                  <IconButton color="inherit">
                    <HelpIcon/>
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withStyles(headerStyles)(
  connect<AdminHeaderStateProps, null, AdminHeaderOwnProps, AppState>(
    mapStateToProps,
    null
  )(AdminHeader)
)
