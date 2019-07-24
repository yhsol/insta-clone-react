import React from "react";
import styled from "styled-components";
import Loader from "../../Loader";
import Avatar from "../../Avatar";
import Button from "../../Button";
import BoldText from "../../../Styles/BoldText";
import ExplorePostCard from "../../ExplorePostCard";
import Follow from "../../Follow";
import media from "styled-media-query";
import { Link } from "react-router-dom";
import { SettingIcon } from "../../Icons";

const Wrapper = styled.div`
  padding-top: 3rem;
  min-height: 80vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 0px 0px 20px;
  border-bottom: 1px solid ${props => props.theme.greyColor};
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderItems = styled.div``;

const HeaderItemsRows = styled.div`
  display: flex;
  align-items: center;
`;

const UserTitle = styled.span`
  margin-right: 14px;
  font-size: 19px;
  display: block;
`;

const UserButtonList = styled.div`
  display: flex;
  align-items: center;
`;

const UserButton = styled.div`
  margin-right: 10px;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
`;

const Count = styled.li`
  font-size: 14px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const FullName = styled(BoldText)`
  font-size: 14px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
  ${media.lessThan("medium")`
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  grid-auto-rows: 100px;
  width: 100vw;
  padding: 1rem;
  `}
`;

const StyledAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
  ${media.lessThan("medium")`width: 50px; height: 50px;`};
`;

const StyledButton = styled(Button)`
  ${media.lessThan("medium")`width: 5rem; height: 1.4rem`};
`;

const ProfilePresenter = ({ loading, data, logOut }) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        id,
        avatar,
        username,
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
        <Header>
          <HeaderItems>
            <StyledAvatar size={""} url={avatar} />
          </HeaderItems>
          <HeaderTitle>
            <HeaderItems>
              <HeaderItemsRows>
                <UserTitle>{username}</UserTitle>
                {itsMe ? (
                  <UserButtonList>
                    <UserButton>
                      <Link to="/accounts">
                        <SettingIcon />
                      </Link>
                    </UserButton>
                    <UserButton>
                      <StyledButton onClick={logOut} text="Log Out" />
                    </UserButton>
                  </UserButtonList>
                ) : (
                  <Follow amIFollowing={amIFollowing} id={id} />
                )}
              </HeaderItemsRows>
            </HeaderItems>
            <Counts>
              <Count>
                <BoldText text={String(postsCount)} /> posts
              </Count>
              <Count>
                <BoldText text={String(followersCount)} /> followers
              </Count>
              <Count>
                <BoldText text={String(followingCount)} /> following
              </Count>
            </Counts>
            <FullName text={fullname} />
            <Bio>{bio}</Bio>
          </HeaderTitle>
        </Header>
        <Posts>
          {posts &&
            posts.map(post => (
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
  }
  return null;
};

export default ProfilePresenter;
