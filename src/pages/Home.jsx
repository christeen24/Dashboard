import React from "react";
import clsx from "clsx";
import { CssBaseline, Link, Box, Typography, Container, Grid, Paper } from "@material-ui/core";
import HomeStyles from "../styles/HomeStyles.js";

import AlertHistory from "../components/Monitor/AlertHistory.jsx";
import Location from "../components/Monitor/Location.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Appbar from "../components/Appbar.jsx";
import Users from "../components/Monitor/Users.jsx";

export default function Monitor() {
  const classes = HomeStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* appbar */}
      <Appbar />
      {/* end of appbar */}
      {/* sidebar */}
      <Sidebar />
      {/* end of sidebar */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            {/* users */}
            <Grid item xs={12} md={4} lg={4}>
              <Users />
            </Grid>
            {/* end of users */}
            {/* Recent Deposits */}
            <Grid item xs={12} md={8} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={fixedHeightPaper}>
                    <Location />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={fixedHeightPaper}>
                  <AlertHistory />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
