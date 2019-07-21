import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import BoldText from "../Styles/BoldText";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

const UserCard = ({ username = "user", url, bio }) => {
  return (
    <Card>
      <Link to={`${username}`}>
        <Avatar size={"sm"} url={url} />
      </Link>
      <div>
        <Link to={`${username}`}>
          <BoldText text={username} />
        </Link>
        <div>{bio}</div>
      </div>
    </Card>
  );
};

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default UserCard;
