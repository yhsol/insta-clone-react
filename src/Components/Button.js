import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.button`
  color: white;
  background-color: ${props => props.theme.blueColor};
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  width: 12rem;
  height: 1.7rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  ${media.lessThan("medium")`display: none`}
`;

const Button = ({ text, onClick }) => {
  return <Container onClick={onClick}>{text}</Container>;
};

export default Button;
