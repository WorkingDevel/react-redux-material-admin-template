import * as React from 'react';
import clsx from 'clsx';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, withStyles, WithStyles} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {navigatorStyles} from "../../theme";
import NavMenu from "./NavMenu";
import {navigation} from "../../config/navigation";
import NavMenuItem from "./NavMenuItem";
import {DrawerProps} from "@material-ui/core/Drawer";
import {Dispatch} from "redux";
import {setActiveNavItem} from "../../store/adminHtml/actions";
import {connect} from "react-redux";
import {AppState} from "../../store";
import {AdapterLink} from "../../utils";

export interface NavigatorGroup {
  id: string,
  title: string,
  entries: Array<NavigatorEntry>
}

export interface NavigatorEntry {
  id: string,
  title: string,
  icon: React.ReactElement,
  href: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface NavigatorOwnProps extends WithStyles<typeof navigatorStyles> {
  title: string;
  subTitle: string;
  variant?: 'permanent' | 'persistent' | 'temporary';
  open?: boolean;
}

export interface NavigatorStateProps {
  activePage: string;
}

interface NavigatorDispatchProps {
  onItemClick: (id: string) => void
}

export type NavigatorProps = NavigatorStateProps & NavigatorOwnProps & DrawerProps & NavigatorDispatchProps;

class Navigator extends React.Component<NavigatorProps> {
  constructor(props: any) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event: React.MouseEvent<HTMLElement>): void {
    this.props.onItemClick("home");
  }

  render() {
    const {title, subTitle, variant, classes, activePage, onItemClick, ...other} = this.props;
    return (
      <Drawer variant={variant} {...other}>
        <List disablePadding>
          <ListItem
            className={clsx(classes.firebase, classes.item, classes.itemCategory)}
            key="1"
          >
            {title}
          </ListItem>
          <ListItem
            button
            className={clsx(classes.item, classes.itemCategory, activePage === "home" && classes.itemActiveItem)}
            key="2"
            onClick={this.onClick}
            component={AdapterLink}
            to="/"
          >
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.itemPrimary,
              }}
            >
              {subTitle}
            </ListItemText>
          </ListItem>
          {navigation.map(({id, title, entries}) => (
            <React.Fragment key={id}>
              <NavMenu title={title} id={id}>
                {entries.map(({id: childId, icon, title, onClick, href}) => (
                  <React.Fragment key={childId}>
                    <NavMenuItem
                      title={title}
                      id={childId}
                      icon={icon}
                      onClick={onClick}
                      href={href}
                    >
                    </NavMenuItem>
                  </React.Fragment>
                ))}
              </NavMenu>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: NavigatorOwnProps): NavigatorDispatchProps => {
  return {
    onItemClick: (id: string) => {
      dispatch(setActiveNavItem(id))
    }
  }
};

const mapStateToProps = (state: AppState): NavigatorStateProps => ({
  activePage: state.adminHtml.activePage
});

export default withStyles(navigatorStyles)(
  connect<NavigatorStateProps, NavigatorDispatchProps, NavigatorOwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
  )(Navigator)
);
