import { makeStyles } from "@material-ui/core/styles";

const UsersStyles = makeStyles((theme) => ({
  userCard: {
    marginBottom: theme.spacing(2),
    border: "1px solid #000",
    borderRadius: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 750,
  },
}));

export default UsersStyles;
