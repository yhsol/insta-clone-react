import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { ExploreIcon, ProfileIcon, EmptyHeartIcon, LogoIcon } from "./Icons";
import { useQuery } from "react-apollo-hooks";
import { ME } from "./SharedQuery";
import media from "styled-media-query";

const HeaderForm = styled.header`
  border-bottom: ${props => props.theme.boxBorder};
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SHeader = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${media.lessThan("medium")`
  width: 89vw;
  &:first-child {
    text-align: left;
    padding-left: 1rem;
  }
  `};
`;

const HeaderTitle = styled.div``;

const HeaderItems = styled.ul`
  display: flex;
  justify-content: center;
`;

const HeaderItem = styled.li`
  padding: 0 0.5rem;
`;

const SLink = styled(Link)`
  color: ${props => props.theme.blackColor};
`;

const Header = ({ history }) => {
  const search = useInput("");
  const { data } = useQuery(ME);
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };

  return (
    <HeaderForm>
      <SHeader>
        <HeaderTitle>
          <SLink to="/">
            <LogoIcon />
          </SLink>
        </HeaderTitle>
        <form onSubmit={onSearchSubmit}>
          <Input
            value={search.value}
            onChange={search.onChange}
            placeholder="search..."
          />
        </form>
        <HeaderItems>
          <HeaderItem>
            <SLink to="/explore">
              <ExploreIcon />
            </SLink>
          </HeaderItem>
          <HeaderItem>
            <SLink to="/notification">
              <EmptyHeartIcon />
            </SLink>
          </HeaderItem>
          <HeaderItem>
            {!data.me ? (
              <SLink to="/">
                <ProfileIcon />
              </SLink>
            ) : (
              <SLink to={data.me.username}>
                <ProfileIcon />
              </SLink>
            )}
          </HeaderItem>
        </HeaderItems>
      </SHeader>
    </HeaderForm>
  );
};

export default withRouter(Header);
