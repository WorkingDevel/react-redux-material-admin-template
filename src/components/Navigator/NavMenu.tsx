import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import {withStyles, WithStyles} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {navigatorStyles} from "../../theme";

interface NavMenuProps extends WithStyles<typeof navigatorStyles> {
  title: string;
  id?: string;
}

class NavMenu extends React.Component<NavMenuProps> {

  render() {
    const {title, id, classes} = this.props;
    return (
      <React.Fragment key={id !== null ? id : title}>
        <ListItem className={classes.categoryHeader}>
          <ListItemText
            classes={{
              primary: classes.categoryHeaderPrimary,
            }}
          >
            {title}
          </ListItemText>
        </ListItem>
        {this.props.children}
        <Divider className={classes.divider}/>
      </React.Fragment>
    );
  }
}

export default withStyles(navigatorStyles)(NavMenu);

