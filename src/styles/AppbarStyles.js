import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 100;

const AppbarStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "none",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    borderBottom: "1px solid #000",
    height: "75px",
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  title: {
    color: "#000",
    flexGrow: 1,
    fontSize: "46px",
  },
  messagebtn: {
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid #000",
    padding: theme.spacing(1, 5),
    marginRight: theme.spacing(5),
  },
  sosImage: {
    width: "80px",
    height: "60px",
  },

}));

export default AppbarStyles;
