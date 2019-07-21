import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo-hooks";
import { UNFOLLOW, FOLLOW } from "./FollowQuery";
import FollowPresenter from "./FollowPresenter";

const FollowContainer = ({ amIFollowing, id }) => {
  const [amIFollowingState, setAmIFollowing] = useState(amIFollowing);
  const followMutation = useMutation(FOLLOW, { variables: { id } });
  const unfollowMutation = useMutation(UNFOLLOW, { variables: { id } });

  const onClick = () => {
    if (amIFollowingState === true) {
      setAmIFollowing(false);
      unfollowMutation();
    } else {
      setAmIFollowing(true);
      followMutation();
    }
  };

  return (
    <FollowPresenter
      amIFollowing={amIFollowingState}
      onClick={onClick}
      id={id}
    />
  );
};

FollowContainer.propTypes = {
  amIFollowing: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default FollowContainer;
