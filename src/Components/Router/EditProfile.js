import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  width: 80vw;
  ${media.lessThan("medium")`width: 100vw;`}
`;
const EditProfile = () => {
  return <Wrapper>edit profile</Wrapper>;
};

export default EditProfile;
