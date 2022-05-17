const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  addProduct
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

//@desc add a product to the db
//@route PUT /api/products/:id
//@access Public
// router.put("/:id", updateProductById);

module.exports = router;
