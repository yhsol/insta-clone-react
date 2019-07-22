import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Loader";
import Avatar from "../Avatar";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullname
      amIFollowing
      itsMe
      bio
      followingCount
      followersCount
      postsCount
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
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

const Header = styled.header``;

const Profile = ({
  match: {
    params: { username }
  }
}) => {
  const { loading, data } = useQuery(GET_USER, { variables: { username } });
  console.log(data);

  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else {
    const {
      seeUser: {
        id,
        avatar,
        fullname,
        amIFollowing,
        itsMe,
        bio,
        followingCount,
        followersCount,
        postsCount,
        posts
      }
    } = data;
    return (
      <Wrapper>
        <Avatar size={"lg"} url={avatar} />
      </Wrapper>
    );
  }
  // <Wrapper>
  //   {loading ? <Loader /> : <Avatar size={"lg"} url={avatar} />}
  // </Wrapper>
};

export default withRouter(Profile);
