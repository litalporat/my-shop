const express = require("express");
const router = express.Router();
const { verifyToken } = require('../middlewares/auth');

const {
  getAllProducts,
  getProductById,
  addProduct,
  setProductById,
  removeProductById
} = require("../controller/productControllers");

//@desc get all product from db
//@route GET /api/products
//@access Public
router.get("/", getAllProducts);

//@desc get a product by id from db
//@route GET /api/products/:id
//@access Public
router.get("/:id", getProductById);

//@desc add a product to the db
//@route POST /api/products/
//@access Public
router.post("/", addProduct);

//@desc update a product to the db
//@route PATCH /api/products/:id
//@access Public
router.patch("/:id", setProductById);

//@desc delete a product to the db
//@route DELETE /api/products/:id
//@access Public
router.delete("/:id", removeProductById);

module.exports = router;
