import * as React from 'react';
import clsx from 'clsx';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, withStyles, WithStyles} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {navigatorStyles} from "../../theme";
import NavMenu from "./NavMenu";
import {navigation} from "../../config/navigation";
import NavMenuItem from "./NavMenuItem";
import {DrawerProps} from "@material-ui/core/Drawer";

export interface NavigatorGroup {
  id: string,
  title: string,
  entries: Array<NavigatorEntry>
}

export interface NavigatorEntry {
  id: string,
  title: string,
  icon: React.ReactElement,
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  href?: string;
}

interface NavigatorOwnProps extends WithStyles<typeof navigatorStyles> {
  title: string;
  subTitle: string;
  variant?: 'permanent' | 'persistent' | 'temporary';
  open?: boolean;
}

export interface NavigatorStateProps {
  active: string;
}

export type NavigatorProps = NavigatorStateProps & NavigatorOwnProps & DrawerProps;

class Navigator extends React.Component<NavigatorProps> {

  render() {
    const {title, subTitle, variant, classes, active, ...other} = this.props;
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
            className={clsx(classes.item, classes.itemCategory)}
            key="2"
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
                {entries.map(({id: childId, icon, title, onClick}) => (
                  <React.Fragment key={childId}>
                    <NavMenuItem
                      title={title}
                      id={childId}
                      active={childId === active}
                      icon={icon}
                      onClick={onClick}
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


export default withStyles(navigatorStyles)(Navigator)
