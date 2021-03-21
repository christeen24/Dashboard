import React, { useState } from "react";
import clsx from "clsx";
import {
  Button,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Container
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// styles imports
import AppbarStyles from "../styles/AppbarStyles.js";

// image imports
import sos from "../assets/images/Group 323@3x.png";

export default function Appbar(props) {
  const classes = AppbarStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
        position="absolute"
        className={clsx(classes.appBar, classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Monitor
          </Typography>
          <Button className={classes.messagebtn}>Message</Button>
          <Avatar src={sos} alt="sos" className={classes.sosImage}></Avatar>
        </Toolbar>
      </AppBar>
      </div>
    </React.Fragment>
  );
}
