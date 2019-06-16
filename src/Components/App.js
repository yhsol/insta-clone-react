import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import RouterComponent from "./RouterComponent";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";

const AppQuery = gql`
  {
    isLoggedIn @client
  }
`;

const App = () => {
  const {
    data: { isLoggedIn }
  } = useQuery(AppQuery);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <RouterComponent isLoggedIn={isLoggedIn} />
      </>
    </ThemeProvider>
  );
};

export default App;
