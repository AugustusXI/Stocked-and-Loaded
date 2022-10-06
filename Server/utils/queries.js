import { gql } from "@apollo/client";
new GraphQLObjectType({
  name: "Query",
  fields: {
    _dummy: { type: graphql.GraphQLString },
  },
});
