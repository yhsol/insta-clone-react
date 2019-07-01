import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Loader";

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
        user {
          id
          username
        }
        text
      }
      isLiked
      likeCount
      commentCount
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 4.8rem;
  min-height: 68vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
`;

const Feed = () => {
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data, loading);
  return <Wrapper>{loading && <Loader />}</Wrapper>;
};

export default Feed;
