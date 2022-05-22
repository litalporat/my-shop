const express = require("express");
const router = express.Router();

const {
    getAllCategories
} = require("../controller/categoriesControllers");

//@desc get all product categoreis
//@route GET /api/categories
//@access Public
router.get("/", getAllCategories);

module.exports = router;