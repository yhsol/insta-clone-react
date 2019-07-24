import React from "react";
import styled from "styled-components";

const Container = styled.button`
  color: white;
  background-color: ${props => props.theme.blueColor};
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  width: 8rem;
  height: 1.7rem;
  /* margin-top: 0.5rem;
  margin-bottom: 1rem; */
`;

const Button = ({ text, onClick, className }) => {
  return (
    <Container onClick={onClick} className={className}>
      {text}
    </Container>
  );
};

export default Button;
