const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const mongoose = require("mongoose");

require("dotenv").config();

const typeDefs = require("./Graphql/Types");
const resolvers = require("./Graphql/Resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),

});

server.listen(5000, async () => {
  mongoose.connect(process.env.MONGODB_URI);

  console.log("RUN SERVER ");
});
