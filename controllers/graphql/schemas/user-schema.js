const { gql } = require("apollo-server-express");

const userSchema = gql`

  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    UKRAINE
  }
`;

module.exports = { userSchema };
