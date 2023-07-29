import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {},
  palette: {
    blogWhite: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    blogDark: {
      main: "#000000",
      contrastText: "#fff",
    },
    blogRed: {
      main: "#dc2626",
      contrastText: "#fff",
    },
    grey: {
      main: "#f6f6f8",
      darkGrey: "#5A5A5A",
      lightGrey: "#808080",
      silver: "#c0c0c0",
      contrastText: "#000000",
    },
    brown: {
      main: "#A8623E",
      dark: "#400C02",
      contrastText: "#fff",
    },
    black: {
      main: "#0f0f11",
      contrastText: "fff",
    },
    background: {
      default: "#f7f7f9",
    },
  },
  //   typography: {
  //     fontFamily: ["'Open Sans', sans-serif"].join(","),
  //     fontSize: 12,
  //     h1: {
  //       fontFamily: ["'Open Sans', sans-serif"].join(","),
  //       fontSize: 40,
  //     },
  //     h2: {
  //       fontFamily: ["'Open Sans', sans-serif"].join(","),
  //       fontSize: 32,
  //     },
  //     h3: {
  //       fontFamily: ["'Open Sans', sans-serif"].join(","),
  //       fontSize: 24,
  //     },
  //     h4: {
  //       fontFamily: ["'Open Sans', sans-serif"].join(","),
  //       fontSize: 20,
  //     },
  //     h5: {
  //       fontFamily: ["'Open Sans', sans-serif"].join(","),
  //       fontSize: 16,
  //     },
  //     h6: {
  //       fontFamily: ["'Open Sans', sans-serif"].join(","),
  //       fontSize: 14,
  //     },
  //   },
});

export default theme;
