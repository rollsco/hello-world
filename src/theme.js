import { createMuiTheme } from "@material-ui/core/styles";

export const red = "rgb(140,26,0)";
export const black = "rgb(70,70,70)";
export const green = "rgb(0,70,10)";
export const golden = "rgb(249,168,37)";

const colourCombinations = [
  { type: "dark", primary: "#212121", secondary: "#f9a825" },
  { type: "dark", primary: "#440027", secondary: "#CD88AF" },
  { type: "dark", primary: "#0A4600", secondary: "#96D38D" },
  { type: "dark", primary: "#555300", secondary: "#FFFDAA" },
  { type: "dark", primary: "#061639", secondary: "#7788AA" },
  { type: "dark", primary: "#9D1200", secondary: "#FF6855" },
  { type: "dark", primary: "#1D0666", secondary: "#D84197" },
  { type: "light", primary: "#9D1200", secondary: "#FF3F25" },
  { type: "light", primary: "#9576AB", secondary: "#3A1356" },
  { type: "light", primary: "#96D38D", secondary: "#1E6912" },
  { type: "light", primary: "#f9a825", secondary: "#121212" },
  { type: "light", primary: "#82C38D", secondary: "#804815" },
  { type: "light", primary: "#FFD3AA", secondary: "#804815" },
  { type: "light", primary: "#FFD3AA", secondary: "#10621E" },
  { type: "light", primary: "#1B79B1", secondary: "#AA0036" },
  { type: "light", primary: "#664AC2", secondary: "#990057" },
];

const length = colourCombinations.length;
const current = colourCombinations[Math.floor(Math.random() * length)];

export default createMuiTheme({
  palette: {
    type: current.type,
    primary: {
      main: "#212121",
      main: current.primary,
    },
    secondary: {
      main: "#f9a825",
      main: current.secondary,
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Raleway"].join(","),
  },
});
