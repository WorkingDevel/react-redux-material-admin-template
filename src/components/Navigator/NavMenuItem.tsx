import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {withStyles, WithStyles} from "@material-ui/core";
import clsx from "clsx";
import {navigatorStyles} from "../../theme";
import {Dispatch} from "redux";
import {setActiveNavItem} from "../../store/adminHtml/actions";
import {connect} from "react-redux";
import {AppState} from "../../store";

interface NavMenuItemOwnProps {
  title: string;
  id: string;
  active?: boolean;
  icon: React.ReactElement;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface NavMenuItemDispatchProps {
  onItemClick: (id: string) => void
}

type NavMenuItemProps = WithStyles<typeof navigatorStyles> & NavMenuItemOwnProps & NavMenuItemDispatchProps;

class NavMenuItem extends React.Component<NavMenuItemProps> {

  constructor(props: any) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event: React.MouseEvent<HTMLElement>): void {
    if (this.props.onClick !== undefined) {
      this.props.onClick!(event);
    }
    this.props.onItemClick(this.props.id);
    event.preventDefault();
  }

  render() {
    let {title, id, active, icon, classes} = this.props;

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
        onClick={this.onClick}
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

const mapDispatchToProps = (dispatch: Dispatch, ownProps: NavMenuItemOwnProps): NavMenuItemDispatchProps => {
  return {
    onItemClick: (id: string) => {
      dispatch(setActiveNavItem(id))
    }
  }
};

export default withStyles(navigatorStyles)(
  connect<null, NavMenuItemDispatchProps, NavMenuItemOwnProps, AppState>(
    null,
    mapDispatchToProps
  )(NavMenuItem)
);
