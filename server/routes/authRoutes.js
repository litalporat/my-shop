const express = require("express");
const router = express.Router();

const {
    validateLogin
} = require("../controller/authControllers");

//@desc auth a user
//@route POST /api/auth
//@access Public
router.post("/", validateLogin);

module.exports = router;