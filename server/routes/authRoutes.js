const express = require("express");
const router = express.Router();

const {
    validateLogin,
    refreshToken,
    deleteRefreshToken
} = require("../controller/authControllers");

//@desc auth users and get tokens
//@route POST /api/auth
//@access Public
router.post("/login", validateLogin);

//@desc get a refresh token
//@route POST /api/auth/token
//@access Public
router.post("/token", refreshToken);

//@desc get a refresh token
//@route POST /api/auth/token
//@access Public
router.delete("/logout", deleteRefreshToken);

module.exports = router;