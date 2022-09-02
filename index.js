const express = require("express");
const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const typeDefs = require("./Graphql/Types");
const resolvers = require("./Graphql/Resolvers");

const port = process.env.PORT || 5000;



const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});


server.listen(port, async () => {
  mongoose.connect(process.env.MONGODB_URI);

  console.log("RUN SERVER ");
});
