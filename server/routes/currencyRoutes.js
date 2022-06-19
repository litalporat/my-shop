const express = require("express");
const router = express.Router();

const {
    getAllCurrencies
} = require("../controller/currencyController");

//@desc get all currencies
//@route GET /api/currency
//@access Public
router.get("/", getAllCurrencies);

module.exports = router;