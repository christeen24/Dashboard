import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 100;

const SidebarStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {},
  drawerPaper: {
    backgroundColor: "#000",
    alignItems: "center",
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  listitem: {
    padding: "2rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  listitemAvatar: {
    width: "3rem",
    height: "2.8rem",
  },
}));

export default SidebarStyles;
