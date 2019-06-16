import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor};
`;

const Input = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Input;
