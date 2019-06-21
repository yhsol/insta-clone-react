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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
          </Route>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
