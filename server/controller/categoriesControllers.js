const res = require("express/lib/response");
const Categories = require("../models/Categories");
const logger = require('../utils/logger');
require('../utils/validators.js')();

const getAllCategories = async (req, res) => {
  try {
    const cat = await Categories.find({});
    res.status(200).json(cat);
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Server Error!" });
  }
};

module.exports = {
    getAllCategories
}