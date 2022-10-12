const { User, Food } = require("../models");

const resolvers = {
  Query: {
    inStock: async () => {
      return await Food.find({ inStock: true });
    },

    allFood: async () => {
      return await Food.find();
    },
    outOfStock: async () => {
      return await Food.find({ inStock: false });
    },
    onOrder: async () => {
      return await Food.find({ onOrder: true });
    },
    toOrder: async () => {
      return await Food.find({ onOrder: false });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
