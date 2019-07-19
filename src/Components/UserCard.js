import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import BoldText from "../Styles/BoldText";
import Button from "./Button";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
  border-bottom: ${props => props.theme.boxBorder};
  }
  /* justify-content: center; */
  /* flex-direction: column; */
  /* ${props => props.theme.whiteBox} */
`;

const UserCard = ({ username = "user", amIFollowing, itsMe, url }) => {
  return (
    <Card>
      <Avatar size={"sm"} url={url} />
      <BoldText text={username} />
      {/* {!itsMe && <Button text={amIFollowing ? "unfollow" : "follow"} />} */}
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
