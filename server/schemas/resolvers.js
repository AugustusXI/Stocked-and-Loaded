const { User, Food } = require("../models");

const resolvers = {
  Query: {
    inStock: async () => {
      return await Food.find({ inStock: true });
    },

    allFood: async (parent, { profileId }) => {
      return await Food.find();
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};
module.exports = resolvers;
