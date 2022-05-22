const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  name: String
});

const Categories = mongoose.model("categories", categoriesSchema);

module.exports = Categories;