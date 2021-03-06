import * as React from 'react';
import {Button, Theme, WithStyles} from "@material-ui/core";

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import {AppState} from "../../store";
import {SystemState} from "../../store/system/types";
import {updateLogin} from "../../store/system/actions";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Formik, FormikActions, FormikProps} from "formik";
import {Redirect} from "react-router";

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

const mapDispatchToProps = (dispatch: Dispatch, ownProps: LogInPageOwnProps): LogInPageDispatchProps => {
  return {
    onLoginClick: (username: string) => {
      dispatch(updateLogin({
        loggedIn: true,
        userName: username,
        session: "dummySession"
      }))
    }
  }
};

interface LogInPageStateProps {
  system: SystemState
}

interface LogInPageDispatchProps {
  onLoginClick: (username: string) => void
}

interface LogInPageOwnProps {

}

interface MyFormValues {
  email: string;
  password: string;
}

type LogInPageProps = LogInPageStateProps & LogInPageDispatchProps & LogInPageOwnProps & WithStyles<typeof styles>;

class LogInPage extends React.Component<LogInPageProps> {

  constructor(props: any) {
    super(props);
    this.onFormikSubmit = this.onFormikSubmit.bind(this);
  }

  onFormikSubmit(values: MyFormValues, {setSubmitting}: FormikActions<MyFormValues>): void {
    if (values.email === "admin@cm" && values.password === "123") {
      // setTimeout(() => {
      //   alert("Logged in " + JSON.stringify(values, null, 2));
      //   setSubmitting(false);
      // }, 500);

      this.props.onLoginClick(values.email);
    }
  }

  render() {
    const {classes} = this.props;
    if (this.props.system.loggedIn) {
      return <Redirect to='/'/>;
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Formik
            initialValues={{
              password: '',
              email: ''
            }}
            onSubmit={this.onFormikSubmit}
            render={(formikBag: FormikProps<MyFormValues>) => (
              <form className={classes.form} noValidate onSubmit={formikBag.handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={formikBag.handleChange}
                  onBlur={formikBag.handleBlur}
                  value={formikBag.values.email}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={formikBag.handleChange}
                  onBlur={formikBag.handleBlur}
                  value={formikBag.values.password}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary"/>}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            )}
          />
        </div>
      </Container>
    )
  }
}

export default withStyles(styles)(
  connect<LogInPageStateProps, LogInPageDispatchProps, LogInPageOwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
  )(LogInPage)
)
