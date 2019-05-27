import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {withStyles, WithStyles} from "@material-ui/core";
import clsx from "clsx";
import {navigatorStyles} from "../../theme";

interface NavMenuItemProps extends WithStyles<typeof navigatorStyles> {
  title: string;
  id?: string;
  active?: boolean;
  icon: React.ReactElement;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

class NavMenuItem extends React.Component<NavMenuItemProps> {

  render() {
    let {title, id, active, icon, classes, onClick} = this.props;

    return (
      <ListItem
        button
        dense
        className={clsx(
          classes.item,
          classes.itemActionable,
          active && classes.itemActiveItem,
        )}
        key={id !== null ? id : title}
        onClick={onClick === null ? (event: React.MouseEvent<HTMLElement>) => (event.preventDefault()) : onClick}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.itemPrimary,
            dense: classes.textDense,
          }}
          // onClick={alert("hallo")}
        >
          {title}
        </ListItemText>
      </ListItem>
    );
  }
}

export default withStyles(navigatorStyles)(NavMenuItem);
