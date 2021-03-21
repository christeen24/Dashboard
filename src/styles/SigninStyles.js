import { makeStyles } from "@material-ui/core/styles";

const SigninStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    border: "1px solid lightGrey",
    padding: theme.spacing(5),
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(0),
      border: "none",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: "#000",
  },
}));

export default SigninStyles;
