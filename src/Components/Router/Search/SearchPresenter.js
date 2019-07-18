import React from "react";
import styled from "styled-components";
import BoldText from "../../../Styles/BoldText";
import UserCard from "../../UserCard";
import Loader from "../../Loader";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
`;

const SearchPresenter = ({ searchTerm, data, loading }) => {
  console.log(data);
  const { username, amIFollowing, url, itsME, avatar } = data;
  return (
    <Wrapper>
      {searchTerm === undefined && <BoldText text={"Search for someting"} />}
      {loading && <Loader />}
      {!loading && data && data.searchUser && data.searchUser.length === 0 && (
        <BoldText text={"No Users Found"} />
      )}
      {!loading && data && data.searchPost && data.searchPost.length === 0 && (
        <BoldText text={"No Posts Found"} />
      )}
      <div>{searchTerm}</div>
      {/* <UserCard
        username={username}
        amIFollowing={amIFollowing}
        url={url}
        itsME={itsME}
        avatar={avatar}
      /> */}
    </Wrapper>
  );
};

export default SearchPresenter;