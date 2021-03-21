import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Link,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@material-ui/core";
import PropTypes from "prop-types";

// Generate Order Data
function createData(id, date, alertView, time, location) {
  return { id, date, alertView, time, location };
}

function preventDefault(event) {
  event.preventDefault();
}

const rows = [
  createData(0, "12 / Mar / 2020", "On", "03 : 34 : 04 p.m.", "Live Map"),
  createData(1, "12 / Mar / 2020", "Off", "04 : 34 : 04 a.m.", "Live Map"),
  createData(2, "12 / Mar / 2020", "On", "07 : 34 : 04 a.m.", "Live Map"),
  createData(3, "12 / Mar / 2020", "On", "04 : 34 : 04 a.m.", "Live Map"),
  createData(4, "12 / Mar / 2020", "Off", "03 : 34 : 04 a.m.", "Live Map"),
];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

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

export default function AlertHistory() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Paper square className={fixedHeightPaper}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="History ( Jaison Burnette )" disabled {...a11yProps(0)} />
          <Tab label="All" {...a11yProps(1)} />
          <Tab label="Location" disabled {...a11yProps(2)} />
          <Tab label="Message" disabled {...a11yProps(3)} />
          <Tab label="Alert" disabled {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography>ndhbcdk</Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Alert view</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.alertView}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>
                    <Link color="primary" href="#" onClick={preventDefault}>
                      {row.location}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>ndhbcdk</Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography>ndhbcdk</Typography>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography>ndhbcdk</Typography>
        </TabPanel>
      </Paper>
    </React.Fragment>
  );
}
