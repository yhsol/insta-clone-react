import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Loader";
import Post from "./Post";
import media from "styled-media-query";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      location
      caption
      comments {
        id
        text
        user {
          id
          username
        }
      }
      commentCount
      isLiked
      likeCount
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  min-height: 68vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
`;

const Feed = () => {
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data, loading);
  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed.map(post => (
          <Post
            key={post.id}
            id={post.id}
            user={post.user}
            files={post.files}
            location={post.location}
            caption={post.caption}
            comments={post.comments}
            commentCount={post.commentCount}
            isLiked={post.isLiked}
            likeCount={post.likeCount}
            createdAt={post.createdAt}
          />
        ))}
    </Wrapper>
  );
};

export default Feed;
