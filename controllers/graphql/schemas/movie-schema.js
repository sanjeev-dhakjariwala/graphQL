const { gql } = require("apollo-server");

const movieSchema = gql`
    type Movie{
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }
`;

module.exports = { movieSchema };
