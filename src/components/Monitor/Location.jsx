import React, { useState } from "react";
import clsx from "clsx";import { Typography, Paper } from "@material-ui/core";

import location from "../../assets/images/80-cool-grey@3x.png";

import LocationStyles from "../../styles/LocationStyles.js";

export default function Deposits() {
  const classes = LocationStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <React.Fragment>
      <Paper square className={fixedHeightPaper}>
        <img src={location} />
      </Paper>
    </React.Fragment>
  );
}
