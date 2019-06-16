import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SLink = styled.span`
  cursor: pointer;
  color: ${props => props.theme.blueColor};
  margin-left: 10px;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17rem;
`;

const Auth = () => {
  const [action, setAction] = useState("signUp");
  return (
    <Wrapper>
      <Box>
        {action !== "logIn" ? (
          <>
            Don't have an account?{" "}
            <SLink onClick={() => setAction("logIn")}>Sign Up</SLink>
          </>
        ) : (
          <>
            Have an account?{" "}
            <SLink onClick={() => setAction("signUp")}>Log In</SLink>
          </>
        )}
      </Box>
    </Wrapper>
  );
};

export default Auth;
