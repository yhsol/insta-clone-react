import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

const Client = new ApolloClient({
  uri: "http://localhost:4001",
  clientState: {
    defaults,
    resolvers
  }
});

export default Client;
