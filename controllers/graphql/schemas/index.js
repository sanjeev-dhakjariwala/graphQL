const { mainSchema } = require("./main");
const { userSchema } = require("./user-schema");
const { movieSchema } = require("./movie-schema");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { resolvers } = require("../resolvers/Resolvers");

const typeDefs = [mainSchema, userSchema, movieSchema];

// const learnMainSchema = makeExecutableSchema({
//   typeDefs: [userSchema, movieSchema, mainSchema],
//   resolvers: resolvers
// });

module.exports = { typeDefs, resolvers };

// module.exports = { learnMainSchema };
