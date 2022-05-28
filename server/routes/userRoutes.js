const express = require("express");
const router = express.Router();
const { verifyToken } = require('../middlewares/auth');
const { getAllUsers, getUserById, addUser, deleteUserById } = require("../controller/userControllers");

//@desc get all users from db
//@route GET /api/users
//@access Public
router.get("/", verifyToken, getAllUsers);

//@desc get a user by id from db
//@route GET /api/users/:id
//@access Public
router.get("/:id", verifyToken, getUserById);

//@desc add a user to the db
//@route POST /api/users
//@access Public
router.post("/", addUser);

// @desc delete a user from the db
// @route DELETE /api/products/:id
// @access Public
router.delete("/:id", verifyToken, deleteUserById);

module.exports = router;
