import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import RouterComponent from "./RouterComponent";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <RouterComponent isLoggedIn={false} />
      </>
    </ThemeProvider>
  );
};

export default App;
