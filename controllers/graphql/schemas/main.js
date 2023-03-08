const { gql } = require("apollo-server-express");

const mainSchema = gql`
  type Query {
    users: [Users!]!
    user(id: ID!): User!
    movies: [Movies!]!
  }
`;

module.exports = { mainSchema };
