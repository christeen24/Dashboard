import React, { useEffect, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import {
  Paper,
  CssBaseline,
  Tabs,
  Tab,
  Typography,
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
} from "@material-ui/core";
import PropTypes from "prop-types";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// styles imports
import UsersStyles from "../../styles/UsersStyles.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function Users(props) {
  const classes = UsersStyles();
  const [value, setValue] = React.useState(0);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const token = JSON.parse(localStorage.getItem("auth-token"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .get("http://apps.avantrio.xyz:8010/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  });

  return (
    <React.Fragment>
      <Paper square className={fixedHeightPaper}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="Staff" {...a11yProps(0)} />
          <Tab label="Employee" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Card className={classes.userCard} elevation={0}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
            />
          </Card>
          <Card className={classes.userCard} elevation={0}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
            />
          </Card>
          <Card className={classes.userCard} elevation={0}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
            />
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Card className={classes.userCard} elevation={0}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
            />
          </Card>
          <Card className={classes.userCard} elevation={0}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
            />
          </Card>
          <Card className={classes.userCard} elevation={0}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
            />
          </Card>
        </TabPanel>
      </Paper>
    </React.Fragment>
  );
}
