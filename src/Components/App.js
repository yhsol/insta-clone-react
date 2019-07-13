import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./RouterComponent";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh - 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  margin-top: 4.8rem;
`;

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
        <Router>
          <>
            <Header />
            <Wrapper>
              <RouterComponent isLoggedIn={isLoggedIn} />
            </Wrapper>
            <Footer />
            <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
          </>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
