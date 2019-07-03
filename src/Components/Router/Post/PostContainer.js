import React from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";

const PostContainer = ({
  id,
  user,
  files,
  location,
  caption,
  comments,
  commentCount,
  isLiked,
  likeCount,
  createdAt
}) => {
  return (
    <PostPresenter
      id={id}
      user={user}
      files={files}
      location={location}
      caption={caption}
      comments={comments}
      commentCount={commentCount}
      isLiked={isLiked}
      likeCount={likeCount}
      createdAt={createdAt}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  location: PropTypes.string,
  caption: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      }),
      text: PropTypes.string.isRequired
    })
  ),
  commentCount: PropTypes.number,
  isLiked: PropTypes.bool,
  likeCount: PropTypes.number.isRequired,
  createdAt: PropTypes.string
};

export default PostContainer;
