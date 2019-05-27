import React from 'react';
import {WithStyles, withStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import AdminHeader from "../components/AdminHeader";
import Navigator from "../components/Navigator";
import {drawerWidth, styles, theme} from "../theme";
import {connect} from "react-redux";
import {AppState} from "../store";
import {Dispatch} from "redux";
import {toggleMobileOpen} from "../store/adminHtml/actions";
import {AppConfig} from "../config/app";

interface AdminHtmlOwnProps {
  pageTitle: string
}

interface AdminHtmlStateProps {
  mobileOpen: boolean,
  activePage: string
}

interface AdminHtmlDispatchProps {
  onDrawerToggle: () => void
}

type AdminHtmlProps = WithStyles<typeof styles> & AdminHtmlOwnProps & AdminHtmlStateProps & AdminHtmlDispatchProps

class AdminHtml extends React.Component<AdminHtmlProps> {

  render() {
    const {classes} = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline/>
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{style: {width: drawerWidth}}}
                variant="temporary"
                open={this.props.mobileOpen}
                title={AppConfig.title}
                subTitle="Project Overview"
                active={this.props.activePage}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator
                PaperProps={{style: {width: drawerWidth}}}
                open={this.props.mobileOpen}
                variant="permanent"
                title={AppConfig.title}
                subTitle="Project Overview"
                active={this.props.activePage}
              />
            </Hidden>
          </nav>
          <div className={classes.appContent}>
            <AdminHeader onDrawerToggle={this.props.onDrawerToggle} title={this.props.pageTitle}/>
            {this.props.children}
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: AppState): AdminHtmlStateProps => ({
  mobileOpen: state.adminHtml.mobileOpen,
  activePage: state.adminHtml.activePage
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: AdminHtmlOwnProps): AdminHtmlDispatchProps => {
  return {
    onDrawerToggle: () => {
      dispatch(toggleMobileOpen({
        mobileOpen: true,
        activePage: "home"
      }))
    }
  }
};

export default withStyles(styles)(
  connect<AdminHtmlStateProps, AdminHtmlDispatchProps, AdminHtmlOwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
  )(AdminHtml)
)

