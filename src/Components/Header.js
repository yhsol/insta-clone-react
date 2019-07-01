import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { ExploreIcon, ProfileIcon, EmptyHeartIcon, LogoIcon } from "./Icons";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const HeaderForm = styled.header`
  border-bottom: ${props => props.theme.boxBorder};
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 77px;
`;

const SHeader = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
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

const ME = gql`
  {
    me {
      username
    }
  }
`;

const Header = ({ history }) => {
  const search = useInput("");
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  const { data } = useQuery(ME);
  console.log(data);

  return (
    <HeaderForm>
      <SHeader>
        <HeaderTitle>
          <SLink to="/">
            <LogoIcon />
          </SLink>
        </HeaderTitle>
        <form onSubmit={onSearchSubmit}>
          <Input placeholder={"search"} {...search} />
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
            <SLink to="/profile/:username">
              <ProfileIcon />
            </SLink>
          </HeaderItem>
        </HeaderItems>
      </SHeader>
    </HeaderForm>
  );
};

export default withRouter(Header);
