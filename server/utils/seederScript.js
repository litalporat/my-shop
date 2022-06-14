require("dotenv").config();

const { connectDB } = require("../config/mongoConnect");
const productsData = require("../data/products");
const categoriesData = require("../data/categories");
const locationsData = require("../data/locations");
const Location = require("../models/Location");
const Product = require("../models/Product");
const Categories = require('../models/Categories');

connectDB();

const importData = async () => {
  try {
    await Location.deleteMany({});
    await Location.insertMany(locationsData);

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
