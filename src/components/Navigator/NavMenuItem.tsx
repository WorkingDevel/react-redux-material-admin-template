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
import {AdapterLink} from "../../utils";

interface NavMenuItemOwnProps {
  title: string;
  id: string;
  icon: React.ReactElement;
  href: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface NavMenuItemStateProps {
  activePage: string;
}

interface NavMenuItemDispatchProps {
  onItemClick: (id: string) => void
}

type NavMenuItemProps =
  WithStyles<typeof navigatorStyles>
  & NavMenuItemOwnProps
  & NavMenuItemStateProps
  & NavMenuItemDispatchProps;

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
  }

  render() {
    let {title, id, activePage, icon, href, classes} = this.props;

    return (
      <ListItem
        button
        dense
        className={clsx(
          classes.item,
          classes.itemActionable,
          activePage === id && classes.itemActiveItem,
        )}
        key={id !== null ? id : title}
        onClick={this.onClick}
        component={AdapterLink}
        to={href}
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

const mapStateToProps = (state: AppState): NavMenuItemStateProps => ({
  activePage: state.adminHtml.activePage
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: NavMenuItemOwnProps): NavMenuItemDispatchProps => {
  return {
    onItemClick: (id: string) => {
      dispatch(setActiveNavItem(id))
    }
  }
};

export default withStyles(navigatorStyles)(
  connect<NavMenuItemStateProps, NavMenuItemDispatchProps, NavMenuItemOwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
  )(NavMenuItem)
);
