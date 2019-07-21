import React from "react";
import styled from "styled-components";
import { CaptionIcon, LocationIcon } from "./Icons";

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    border-bottom: ${props => props.theme.boxBorder};
  }
  gap: 0.5rem;
  padding: 0 0.5rem;
`;

const PostCard = ({ location, caption }) => {
  return (
    <>
      <Card>
        <LocationIcon />
        <div>{caption}</div>
      </Card>
      <Card>
        <CaptionIcon />
        <div>{location}</div>
      </Card>
    </>
  );
};

PostCard.propTypes = {};

export default PostCard;
