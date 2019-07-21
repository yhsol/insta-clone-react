import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CommentIcon, EmptyHeartIcon } from "./Icons";
import { Link } from "react-router-dom";
import SeePostCard from "./SeePostCard";

const Overlay = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s linear;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  svg {
    fill: white;
  }
`;

const Wrapper = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6px;
  color: white;
`;

const Item = styled.div`
  padding: 0 0.3rem;
`;

const ExplorePostCard = ({ likeCount, commentCount, files }) => {
  return (
    <Wrapper bg={files.url}>
      <Overlay>
        <Items>
          <EmptyHeartIcon />
          <Item>{likeCount}</Item>
        </Items>
        <Items>
          <CommentIcon />
          <Item>{commentCount}</Item>
        </Items>
      </Overlay>
    </Wrapper>
  );
};

ExplorePostCard.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  files: PropTypes.object.isRequired
};

export default ExplorePostCard;
