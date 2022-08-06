const express = require("express");
const router = express.Router();

const {
    getStock,
} = require("../controller/analyticsControllers");


//@desc
//@route GET /api/analytics/stock
//@access Public
router.get("/stock", getStock);

// //@desc
// //@route GET /api/analytics/category
// //@access Public
// router.get("/category", getCategorySales);


module.exports = router;