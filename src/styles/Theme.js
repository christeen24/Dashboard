import { createMuiTheme } from "@material-ui/core/styles";

// dynamic theme for different domains
const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d63031",
      light: "#ff7675",
      dark: "#c0392b",
    },
  },
  overrides: {
    MuiTableCell: {
      root: {
        lineHeight: "4",
        fontSize: "16px",
      },
    },
  },
});

export default Theme;
