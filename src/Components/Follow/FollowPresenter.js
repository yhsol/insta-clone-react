import React from "react";
import Button from "../Button";

const FollowPresenter = ({ amIFollowing, onClick, id }) => {
  return (
    <Button text={amIFollowing ? "unfollow" : "follow"} onClick={onClick} />
  );
};

export default FollowPresenter;
