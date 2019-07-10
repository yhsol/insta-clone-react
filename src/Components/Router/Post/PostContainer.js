import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";
import useInput from "../../../Hooks/useInput";

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
  const [isLikedState, setIsLiked] = useState(isLiked);
  const [likeCountState, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);

  const slider = () => {
    const allFiles = files.length;
    if (currentItem === allFiles - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };
  useEffect(() => {
    slider();
  }, [currentItem]);
  const comment = useInput("");

  return (
    <PostPresenter
      user={user}
      files={files}
      location={location}
      caption={caption}
      comments={comments}
      commentCount={commentCount}
      isLiked={isLikedState}
      likeCount={likeCountState}
      createdAt={createdAt}
      newComment={comment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      currentItem={currentItem}
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
  createdAt: PropTypes.string.isRequired,
  location: PropTypes.string,
  caption: PropTypes.string.isRequired
};

export default PostContainer;
