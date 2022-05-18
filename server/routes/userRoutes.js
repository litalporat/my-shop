const express = require("express");
const router = express.Router();

const { getAllUsers, getUserById, addUser } = require("../controller/userControllers");

//@desc get all users from db
//@route GET /api/users
//@access Public
router.get("/", getAllUsers);

//@desc get a user by id from db
//@route GET /api/users/:id
//@access Public
router.get("/:id", getUserById);

//@desc add a user to the db
//@route POST /api/users
//@access Public
router.post("/", addUser);

//@desc add a product to the db
//@route PUT /api/products/:id
//@access Public
//router.put("/:id", );

//@desc delete a product to the db
//@route DELETE /api/products/:id
//@access Public
//router.delete("/:id", );

module.exports = router;
