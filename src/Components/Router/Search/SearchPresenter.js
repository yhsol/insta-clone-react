import React from "react";
import styled from "styled-components";
import BoldText from "../../../Styles/BoldText";
import UserCard from "../../UserCard";
import Loader from "../../Loader";
import media from "styled-media-query";
import PostCard from "../../PostCard";

const Wrapper = styled.div`
  height: 20rem;
  position: relative;
  top: -8px;
  z-index: 10;
`;

const SearchResultBox = styled.div`
  ${props => props.theme.whiteBox};
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 20rem;
  grid-auto-rows: 3rem;
  overflow: hidden;
  ${media.lessThan("medium")`
  grid-template-columns: 86vw;
  grid-auto-rows: 3rem;
  align-items: center;
  `}
`;

// const SearchCard = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 9fr;
//   align-items: center;
//   justify-content: center;
//   &:not(:last-child) {
//     border-bottom: ${props => props.theme.boxBorder};
//   }
//   gap: 0.5rem;
//   padding: 0 0.5rem;
// `;

const SearchPresenter = ({ searchTerm, data, loading }) => {
  console.log(searchTerm);
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <BoldText text={"Search for something!"} />
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <SearchResultBox>
          {data.searchUser.length === 0 && data.searchPost.length === 0 ? (
            <Section>
              <BoldText text="Nothing Found!" />{" "}
            </Section>
          ) : (
            <>
              <Section>
                {data.searchUser.map(user => (
                  <UserCard
                    key={user.id}
                    username={user.username}
                    url={user.avatar}
                    bio={user.bio}
                    id={user.id}
                    amIFollowing={user.amIFollowing}
                  />
                ))}
              </Section>
              <Section>
                {data.searchPost.map(post => (
                  <PostCard
                    key={post.id}
                    likeCount={post.likeCount}
                    commentCount={post.commentCount}
                    file={post.files[0]}
                    location={post.location}
                    caption={post.caption}
                  />
                ))}
              </Section>
            </>
          )}
        </SearchResultBox>
      </Wrapper>
    );
  }
  // return (
  //   <Wrapper>
  //     {searchTerm === undefined && <BoldText text={"Search for someting"} />}
  //     {loading && <Loader />}
  //     {!loading && data && data.searchUser && data.searchUser.length === 0 && (
  //       <BoldText text={"No Users Found"} />
  //     )}
  //     {!loading && data && data.searchPost && data.searchPost.length === 0 && (
  //       <BoldText text={"No Posts Found"} />
  //     )}
  //     <div>{searchTerm}</div>
  //     {/* <UserCard
  //       username={username}
  //       amIFollowing={amIFollowing}
  //       url={url}
  //       itsMe={itsMe}
  //       avatar={avatar}
  //     /> */}
  //   </Wrapper>
  // );
};

export default SearchPresenter;
