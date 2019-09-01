import { createMuiTheme } from "@material-ui/core/styles";
import { blue, pink } from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: blue,
    secondary: pink
  },
  typography: {
    fontFamily: ["Raleway"].join(",")
  }
});
