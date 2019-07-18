import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import BoldText from "../Styles/BoldText";
import Button from "./Button";
import PropTypes from "prop-types";

const Card = styled.div``;

const UserCard = ({ username = "user", amIFollowing, itsME, url }) => {
  return (
    <Card>
      <Avatar size={"sm"} url={url} />
      <BoldText text={username} />
      {!itsME && <Button text={amIFollowing ? "unfollow" : "follow"} />}
    </Card>
  );
};

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  amIFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  itsMe: PropTypes.bool.isRequired
};

export default UserCard;
