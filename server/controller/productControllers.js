const res = require("express/lib/response");
const Product = require("../models/Product");
const logger = require('../logger');
require('../validators.js')();

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    logger.info("GET /api/products request has been accepted");
    res.json(products);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    logger.info(`GET /api/products/${req.params.id} request has been accepted`);
    res.json(products);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const addProduct = async (req, res) => {
  try {
    const { error } = validateProduct(req.body);
    if (error) {
      logger.error(error);
      res.status(400).send({ status: 400, error});
      return;
    }
    logger.info(`POST /api/products/ request has been accepted`);
    await Product.create(req.body);
  } catch (e) {
    logger.error(e);
    res.status(400).send(e);
  }
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
}