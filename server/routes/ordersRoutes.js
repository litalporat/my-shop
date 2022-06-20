const express = require("express");
const router = express.Router();
const { verifyToken } = require('../middlewares/auth');
const { getAllOrders, addOrder, deleteOrderById, setOrderById } = require("../controller/ordersController");

//@desc get all Orders from db
//@route GET /api/Orders
//@access Public
router.get("/", getAllOrders);

//@desc get a Orders by id from db
//@route PATCH /api/Orders/:id
//@access Public
router.patch("/:id", setOrderById);

//@desc add a Orders to the db
//@route POST /api/Orders
//@access Public
router.post("/", addOrder);

// @desc delete a Orders from the db
// @route DELETE /api/Orders/:id
// @access Public
router.delete("/:id", deleteOrderById);

module.exports = router;
