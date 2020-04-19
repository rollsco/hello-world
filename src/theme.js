import { createMuiTheme } from "@material-ui/core/styles";

export const red = "rgb(140,26,0)";
export const black = "rgb(70,70,70)";
export const green = "rgb(0,70,10)";
export const golden = "rgb(249,168,37)";

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fbc02d",
      main: "#303f9f",
      main: "#9c27b0",
      main: "#009688",
      main: "#2196f3",
      main: "#673ab7",
      main: "#212121",
    },
    secondary: {
      main: "#e64a19",
      main: "#2196f3",
      main: "#7b1fa2",
      main: "#dd2c00",
      main: "#ab003c",
      main: "#ff9100",
      main: "#f9a825",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Raleway"].join(","),
  },
});
