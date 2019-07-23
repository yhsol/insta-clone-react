import React from "react";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";

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

const LOGOUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

const ProfileContainer = ({
  match: {
    params: { username }
  }
}) => {
  const { loading, data } = useQuery(GET_USER, { variables: { username } });
  const logOut = useMutation(LOGOUT);
  return <ProfilePresenter loading={loading} data={data} logOut={logOut} />;
};

export default withRouter(ProfileContainer);
