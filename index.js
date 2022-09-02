const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const mongoose = require("mongoose");

require("dotenv").config();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen( 5000, async () => {
  console.log("RUN SERVER ");
});
