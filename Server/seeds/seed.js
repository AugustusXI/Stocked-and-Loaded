const db = require("../config/connection");
const { Food } = require("../models");

const FoodData = require("./FoodData.json");

db.once("open", async () => {
  await Food.deleteMany({});

  const foodItems = await Food.insertMany(techData);

  console.log("Menu seeded!");
  process.exit(0);
});
