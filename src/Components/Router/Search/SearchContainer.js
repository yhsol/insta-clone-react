import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import BoldText from "../../../Styles/BoldText";
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQuery";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
`;

const SearchContainer = ({ location: { search } }) => {
  const term = search.split("=")[1];
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: {
      term
    }
  });

  return <SearchPresenter searchTerm={term} data={data} loading={loading} />;
};

export default withRouter(SearchContainer);
