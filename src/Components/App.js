import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import RouterComponent from "./RouterComponent";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

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
        <Router>
          <Route>
            <GlobalStyles />
            <Header />
            <RouterComponent isLoggedIn={isLoggedIn} />
            <Footer />
          </Route>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
