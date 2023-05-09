const { gql } = require("apollo-server-express");

const mainSchema = gql`
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRAZIL
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }
  
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
  }
`;

module.exports = { mainSchema };
