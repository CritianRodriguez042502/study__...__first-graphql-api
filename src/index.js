const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graphql/types-defs.js");
const { resolvers } = require("./graphql/resolvers.js");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  {
    console.log(`🚀 Server ready at ${url}`);
  }
});
