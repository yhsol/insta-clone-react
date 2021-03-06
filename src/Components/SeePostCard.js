import React from "react";
import styled from "styled-components";
import BoldText from "../Styles/BoldText";
import { FullHeartIcon, EmptyHeartIcon, CommentIcon } from "./Icons";
import media from "styled-media-query";
import TextareaAutosize from "react-autosize-textarea";
import Avatar from "./Avatar";

// TODO: connect with ExplorePostCard. this component will show whne cliked in ExplorePostCard.

const Section = styled.section`
  width: 50vw;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 2rem;
  margin-bottom: 23px;
  user-select: none;

  ${media.lessThan("medium")`
    width: 75vw;
    display: grid;
    grid-template-columns: 1fr;
`}
`;

const PostSection = styled.div``;

const PostBox = styled.div`
  ${props => props.theme.whiteBox}

  ${media.lessThan("medium")`
    width: 100%;
`}
`;

const Header = styled.header`
  border-bottom: ${props => props.theme.boxBorder};
  display: flex;
  height: 3rem;
  align-items: center;
`;

const Styledavatar = styled(Avatar)`
  margin: 0 0.5rem;
`;

const Location = styled.div`
  margin-top: 2px;
`;

const Content = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.img`
  max-width: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Meta = styled.div`
  padding: 10px;
`;
const PostButton = styled.span`
  cursor: pointer;
`;

const PostButtons = styled.div`
  display: flex;
  ${PostButton} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 5px;
`;

const TimeStamp = styled.div`
  font-weight: 300;
  color: ${props => props.theme.greyColor};
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  margin: 10px 0;
`;

const CommentForm = styled.form`
  display: flex;
  align-items: center;
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  height: 1rem;
  border: none;
  padding-top: 10px;
  border-top: ${props => props.theme.boxBorder};
  &:focus {
    outline: none;
  }
  resize: none;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const PostUser = styled.div`
  display: flex;
  flex-flow: column;
`;

const SeePostCard = ({
  user: { username, avatar },
  files,
  location,
  caption,
  comments,
  commentCount,
  isLiked,
  likeCount = "0",
  createdAt,
  newComment,
  currentItem,
  toggleLike,
  onKeyPress,
  selfCommentState,
  userName
}) => {
  const date = new Date();
  const createdTime = new Date(createdAt);
  const now = date.getDate() - createdTime.getDate();

  return (
    <PostSection>
      <PostBox>
        <Header>
          <Styledavatar size={"sm"} url={avatar} />
          <PostUser>
            <BoldText text={username} />
            <Location>{location}</Location>
          </PostUser>
        </Header>
        <Content>
          {files &&
            files.map((file, index) => (
              <File
                key={file.id}
                id={file.id}
                src={file.url}
                showing={index === currentItem}
              />
            ))}
        </Content>
        <Meta>
          <PostButtons>
            <PostButton onClick={toggleLike}>
              {isLiked ? <FullHeartIcon /> : <EmptyHeartIcon />}
            </PostButton>
            <PostButton>
              <CommentIcon />
            </PostButton>
          </PostButtons>
          <BoldText
            text={likeCount < 2 ? `${likeCount} like` : `${likeCount} likes`}
          />
          {comments &&
            comments.map(comment => (
              <div key={comment.id}>
                <BoldText text={comment.user.username} />
                <span>{comment.text}</span>
              </div>
            ))}
          <TimeStamp>{now} days ago...</TimeStamp>
          <CommentForm>
            {/* <CommentInput placeholder={"Comment!"} {...newComment} /> */}
            <Textarea
              value={newComment.value}
              onChange={newComment.onChange}
              placeholder={"Add a comment..."}
              onKeyPress={onKeyPress}
            />
          </CommentForm>
        </Meta>
      </PostBox>
    </PostSection>
  );
};

export default SeePostCard;
