import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.footer`
  width: 80vw;
  margin: 0 auto;
  bottom: 0;
  display: grid;
  grid-template-columns: 8fr 2fr;
`;

const FooterItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterItem = styled.li`
  padding: 0.5rem;
`;

const SLink = styled(Link)`
  color: ${props => props.theme.navyColor};
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterItems>
        <FooterItem>
          <SLink to="#">ABOUT US</SLink>
        </FooterItem>
        <FooterItem>
          <SLink to="#">SUPPORT</SLink>
        </FooterItem>
        <FooterItem>
          <SLink to="#">PRESS</SLink>
        </FooterItem>
        <FooterItem>
          <SLink to="#">API</SLink>
        </FooterItem>
        <FooterItem>
          <SLink to="#">JOBS</SLink>
        </FooterItem>
        <FooterItem>
          <SLink to="#">PRIVACY</SLink>
        </FooterItem>
        <FooterItem>
          <SLink to="#">TERMS</SLink>
        </FooterItem>
        <FooterItem>
          <SLink to="#">DIRECTORY</SLink>
        </FooterItem>
        <FooterItem>
          <SLink to="#">PROFILES</SLink>
        </FooterItem>
        <FooterItem>
          <SLink to="#">HASHTAGS</SLink>
        </FooterItem>
        <FooterItem>
          <SLink to="#">LANGUAGE</SLink>
        </FooterItem>
      </FooterItems>
      <FooterItem>© 2019 INSTAGRAM</FooterItem>
    </Wrapper>
  );
};

export default Footer;
