import ApolloClient from "apollo-boost";
import { defaultValue, resolvers } from "./LocalState";

const Client = new ApolloClient({
  uri: "http://localhost:4001",
  typeDefs: {
    defaultValue,
    resolvers
  }
});

export default Client;
