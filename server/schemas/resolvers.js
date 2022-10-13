const { User, Food } = require("../models");
const { signToken } = require("../utils/auth");
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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    update: async (parent, { name }) => {
      const food = await Food.findOne({ name });
      let inStock = true;
      let onOrder = true;
      if (!food) {
        console.error("Could not find food");
      }
      if (food.inStock) {
        inStock = false;
        onOrder = false;
      } else if (!food.onOrder) {
        inStock = false;
        onOrder = true;
      } else if (food.onOrder) {
        inStock = true;
        onOrder = false;
      }
      return await Food.findOneAndUpdate(
        { name: name },
        { $set: { inStock: inStock, onOrder: onOrder } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
