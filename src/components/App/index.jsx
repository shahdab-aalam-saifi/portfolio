import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import React from "react";
import theme from "../common/theme";
import Portfolio from "../Portfolio";
import "./styles.css";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container>
          <Portfolio />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
