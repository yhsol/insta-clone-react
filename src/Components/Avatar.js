import React from "react";
import styled from "styled-components";

const getSize = size => {
  let number;
  if (size === "sm") {
    number = 30;
  } else if (size === "md") {
    number = 50;
  } else if (size === "lg") {
    number = 150;
  }
  return `width: ${number}px; height:${number}px;`;
};

const Container = styled.div`
  ${props => getSize(props.size)};
  background-image: url(${props => props.url});
  background-size: cover;
  border-radius: 50%;
  margin: 0 10px;
`;

const Avatar = ({ size = "sm", url }) => {
  return <Container size={size} url={url} />;
};

export default Avatar;
