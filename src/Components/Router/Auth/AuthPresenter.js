import React from "react";
import styled from "styled-components";
import Input from "../../Input";
import Button from "../../Button";

const Wrapper = styled.div`
  margin-top: 4.8rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
`;

const SForm = styled.div`
  ${props => props.theme.whiteBox};
  margin-bottom: 0.5rem;
  width: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  form {
    width: 100%;
    input {
      width: 100%;
      margin-bottom: 0.3rem;
    }
    button {
      background-color: ${props => props.theme.blueColor};
      color: white;
      width: 100%;
    }
  }
`;

const FormTitle = styled.div`
  margin: 1rem auto;
  font-size: 20px;
`;

const AuthToggle = styled.span`
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

// const SInput = styled(Input)`
//   margin-bottom: 0.3rem;
//   width: 12rem;
// `;

// const SButton = styled(Button)`
//   background-color: ${props => props.theme.blueColor};
//   color: white;
//   width: 100%;
// `;

const AuthPresenter = ({
  action,
  setAction,
  username,
  email,
  firstName,
  lastName,
  onSubmit
}) => {
  return (
    <Wrapper>
      <SForm>
        <FormTitle>insta clone</FormTitle>

        {action === "logIn" ? (
          <form onSubmit={onSubmit}>
            <Input placeholder={"email"} {...email} type="email" />
            <Button text={"Log In"} />
          </form>
        ) : (
          <form onSubmit={onSubmit}>
            <Input placeholder={"username"} {...username} />
            <Input placeholder={"email"} {...email} type="email" />
            <Input placeholder={"first name"} {...firstName} />
            <Input placeholder={"last name"} {...lastName} />
            <Button text={"Sign Up"} />
          </form>
        )}
      </SForm>
      <Box>
        {action === "logIn" ? (
          <>
            Don't have an account?{" "}
            <AuthToggle onClick={() => setAction("signUp")}>Sign Up</AuthToggle>
          </>
        ) : (
          <>
            Have an account?{" "}
            <AuthToggle onClick={() => setAction("logIn")}>Log In</AuthToggle>
          </>
        )}
      </Box>
    </Wrapper>
  );
};

export default AuthPresenter;
