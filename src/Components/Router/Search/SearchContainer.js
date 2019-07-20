import React from "react";
import { withRouter } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { SEARCH } from "./SearchQuery";
import { useQuery } from "react-apollo-hooks";

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
