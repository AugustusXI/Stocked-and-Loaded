const db = require("../config/connection");
const { Food, User } = require("../models");

const FoodData = require("./FoodData.json");
// const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
  await Food.deleteMany({});

  const foodItems = await Food.insertMany(FoodData);

  console.log("Menu seeded!");
  process.exit(0);

  // await User.deleteMany({});

  // await User.create(userSeeds);

  // console.log("users seeded");
  // process.exit(0);
});
