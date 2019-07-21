import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import Loader from "../Loader";
import ExplorePostCard from "../ExplorePostCard";

const EXPLORE_QUERY = gql`
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
      likeCount
      commentCount
    }
  }
`;

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const Explore = props => {
  const { data, loading } = useQuery(EXPLORE_QUERY);
  return (
    <Wrapper>
      {loading && <Loader />}
      <Posts>
        {!loading &&
          data &&
          data.seeFeed &&
          data.seeFeed.map(post => (
            <ExplorePostCard
              key={post.id}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              files={post.files[0]}
            />
          ))}
      </Posts>
    </Wrapper>
  );
};

export default withRouter(Explore);
