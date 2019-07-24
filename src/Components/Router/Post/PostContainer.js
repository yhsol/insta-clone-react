import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";
import useInput from "../../../Hooks/useInput";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQuery";
import { toast } from "react-toastify";
import { useMutation } from "react-apollo-hooks";

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
  const [selfCommentState, setSelfCommentState] = useState([]);
  const comment = useInput("");
  const toggleLikeMutation = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });
  const addCommentMutation = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value }
  });

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
  }, []);

  const toggleLike = async () => {
    if (isLikedState === true) {
      setIsLiked(false);
      setLikeCount(likeCountState - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountState + 1);
    }
    try {
      // throw Error();
      await toggleLikeMutation();
    } catch (error) {
      // setIsLiked(!isLikedState);
      toast.error("Can't Like!");
    }
  };

  const onKeyPress = async event => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
      try {
        const {
          data: { addComment }
        } = await addCommentMutation();
        setSelfCommentState([...selfCommentState, addComment]);
        comment.setValue("");
      } catch (error) {
        toast.error("Can't add Comment!");
        console.error(error);
      }
    }
    return;
  };

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
      toggleLike={toggleLike}
      onKeyPress={onKeyPress}
      selfCommentState={selfCommentState}
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
  createdAt: PropTypes.string.isRequired
};

export default PostContainer;
