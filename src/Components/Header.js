import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "./Input";

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

const SInput = styled(Input)`
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderForm>
      <SHeader>
        <HeaderTitle>
          <SLink to="/">Header Title</SLink>
        </HeaderTitle>
        <SInput placeholder="search" />
        <HeaderItems>
          <HeaderItem>
            <SLink to="/explore">explore</SLink>
          </HeaderItem>
          <HeaderItem>
            <SLink to="/notification">notification</SLink>
          </HeaderItem>
          <HeaderItem>
            <SLink to="/profile">profile</SLink>
          </HeaderItem>
        </HeaderItems>
      </SHeader>
    </HeaderForm>
  );
};

export default Header;
