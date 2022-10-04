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
  toOrder: {
    type: Boolean,
  },
  outOfStock: {
    type: Boolean,
  },
});

const Food = model("Food", FoodSchema);

module.exports = Food;
