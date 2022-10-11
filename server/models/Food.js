const { Schema, model } = require("mongoose");

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
  },
  onOrder: {
    type: Boolean,
  },
  // dont think we need this
  // toOrder: {
  //   type: Boolean,
  // },
  // or this
  // outOfStock: {
  //   type: Boolean,
  // },
});

const Food = model("Food", FoodSchema);

module.exports = Food;
