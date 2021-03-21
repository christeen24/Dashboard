import React, { useState } from "react";
import clsx from "clsx";
import {
  Drawer,
  CssBaseline,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

// styles imports
import SidebarStyles from "../styles/SidebarStyles.js";

// image imports
import listItem1 from "../assets/images/Group 537@3x.png";
import listItem2 from "../assets/images/Group 538@3x.png";
import listItem3 from "../assets/images/Group 563@3x.png";
import listItem4 from "../assets/images/Group 548@3x.png";
import listItem5 from "../assets/images/Group 549@3x.png";
import listItem6 from "../assets/images/Group 555@3x.png";
import listItem7 from "../assets/images/Group 565@3x.png";

export default function Sidebar(props) {
  const classes = SidebarStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Divider />
          <List component="nav" aria-label="main mailbox folders" disablePadding>
            <ListItem button className={classes.listitem}>
              <img
                src={listItem1}
                alt="logo"
                variant="square"
                className={classes.listitemAvatar}
              ></img>
            </ListItem>
            <ListItem button className={classes.listitem}>
              <img
                src={listItem2}
                alt="logo"
                variant="square"
                className={classes.listitemAvatar}
              ></img>
            </ListItem>
            <ListItem button className={classes.listitem}>
              <img
                src={listItem3}
                alt="logo"
                variant="square"
                className={classes.listitemAvatar}
              ></img>
            </ListItem>
            <ListItem button className={classes.listitem}>
              <img
                src={listItem4}
                alt="logo"
                variant="square"
                className={classes.listitemAvatar}
              ></img>
            </ListItem>
            <ListItem button className={classes.listitem}>
              <img
                src={listItem5}
                alt="logo"
                variant="square"
                className={classes.listitemAvatar}
              ></img>
            </ListItem>
            <ListItem button className={classes.listitem}>
              <img
                src={listItem6}
                alt="logo"
                variant="square"
                className={classes.listitemAvatar}
              ></img>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </React.Fragment>
  );
}
