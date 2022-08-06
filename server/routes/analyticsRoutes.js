const express = require("express");
const router = express.Router();

const {
    getStock,
    getOrdersCountries
} = require("../controller/analyticsControllers");


//@desc get all stock per product type
//@route GET /api/analytics/stock
//@access Public
router.get("/stock", getStock);

//@desc get all orders per country
//@route GET /api/analytics/countries
//@access Public
router.get("/countries", getOrdersCountries);


module.exports = router;