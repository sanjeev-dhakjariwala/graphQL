const { gql } = require("apollo-server-express");

const movieSchema = gql`
  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }
`;

module.exports = { movieSchema };
