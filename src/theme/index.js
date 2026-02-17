import { createTheme } from "@mui/material/styles";

export const gurukulTheme = createTheme({
  palette: {
    primary: { main: "#2563EB" },
    secondary: { main: "#FACC15" },
    error: { main: "#EF4444" },
    background: { default: "#F8FAFC" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h2: {
      fontSize: "60px", //
      fontWeight: 600,
      lineHeight: "66px",
      letterSpacing: "-2px",
    },
    body1: {
      fontSize: "18px", //
      lineHeight: "30px",
    },
  },
});
