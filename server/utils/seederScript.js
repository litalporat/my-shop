require("dotenv").config();

const productsData = require("../data/products");
const categoriesData = require("../data/categories");
const { connectDB } = require("../config/mongoConnect");
const Product = require("../models/Product");
const Categories = require('../models/Categories');
const categories = require("../data/categories");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);

    await Categories.deleteMany({});
    await Categories.insertMany(categoriesData);

    console.log("data imported success!");

    process.exit();
  } catch (error) {
    console.error(error);
    console.error("Error with data import");
    process.exit(1);
  }
};

module.exports = { importData };

importData();
