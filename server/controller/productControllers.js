const res = require("express/lib/response");
const Product = require("../models/Product");
const logger = require('../utils/logger');

require('../utils/validators.js')();

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
  } catch (e) {
    logger.error(e);
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
    res.json({ status: 200, info: "product added successfuly!", product: req.body })
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Server Error!" });
  }
}

const setProductById = async (req, res) => {
  try {
    const _id = req.params.id;
    const { error } = validateProduct(req.body);
    if (error) {
      logger.error(error);
      res.status(400).send({ status: 400, error });
      return;
    }
    logger.info(`PUT /api/products/${_id} request has been accepted`);
    await Product.findByIdAndUpdate({_id}, req.body);
    res.json({ status: 200, info: "product updated successfuly!", product: req.body })
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Server Error!" });
  }
}

const removeProductById = async (req, res) => {
  try {
    const _id = req.params.id;
    logger.info(`DELETE /api/products/${_id} request has been accepted`);
    const product = await Product.findByIdAndDelete({_id});
    if (product) {
      res.json({ status: 200, info: "product deleted successfuly!" })
      return;
    }
    logger.error("product not exsits!");
    res.json({ status: 400, error: "product not exsits!" })
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Server Error!" });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  setProductById,
  removeProductById
}