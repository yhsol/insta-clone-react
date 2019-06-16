import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";

const Wrapper = styled.div`
  margin-top: 4.8rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SForm = styled.div`
  ${props => props.theme.whiteBox};
  margin-bottom: 0.5rem;
  width: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5rem auto;
`;

const FormTitle = styled.div`
  margin: 1rem auto;
  font-size: 20px;
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
  padding: 0.5rem;
`;

const SInput = styled(Input)`
  margin-bottom: 0.3rem;
  width: 12rem;
`;

const SButton = styled(Button)`
  background-color: ${props => props.theme.blueColor};
  color: white;
  width: 17rem;
`;

const Auth = () => {
  const [action, setAction] = useState("signUp");
  return (
    <Wrapper>
      <SForm>
        <FormTitle>insta clone</FormTitle>

        {action === "logIn" ? (
          <>
            <SInput placeholder="username" />
            <SInput placeholder="password" />
            <SButton text="Log In" />
          </>
        ) : (
          <>
            <SInput placeholder="username" />
            <SInput placeholder="email" />
            <SInput placeholder="first name" />
            <SInput placeholder="last name" />
            <SInput placeholder="password" />
            <SButton text="Sign Up" />
          </>
        )}
      </SForm>
      <Box>
        {action === "logIn" ? (
          <>
            Don't have an account?{" "}
            <SLink onClick={() => setAction("signUp")}>Sign Up</SLink>
          </>
        ) : (
          <>
            Have an account?{" "}
            <SLink onClick={() => setAction("logIn")}>Log In</SLink>
          </>
        )}
      </Box>
    </Wrapper>
  );
};

export default Auth;
