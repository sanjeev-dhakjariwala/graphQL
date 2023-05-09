const { ApolloServer } = require("apollo-server-express");
const {
  typeDefs,
  resolvers
} = require("../controllers/graphql/schemas/index.js");
const {
  learnMainSchema,
} = require("../controllers/graphql/schemas/index.js");
const { app, PORT } = require("./app.js");

async function startServer() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  // const apolloServer = new ApolloServer({ learnMainSchema});
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`);
  });
}

startServer()
