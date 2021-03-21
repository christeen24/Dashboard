import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 90;

const LocationStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
  },
  fixedHeight: {
    [theme.breakpoints.up("lg")]: {
      height: 250,
    },
    [theme.breakpoints.up("xl")]: {
      height: 270,
    },
  },
}));

export default LocationStyles;
