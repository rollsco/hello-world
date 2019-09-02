import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#212121"
    },
    secondary: {
      main: "#f9a825"
    }
  },
  typography: {
    fontFamily: ["Raleway"].join(",")
  }
});
