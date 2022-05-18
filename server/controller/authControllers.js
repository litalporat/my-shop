const res = require("express/lib/response");
const User = require("../models/User");
const logger = require('../utils/logger');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../middlewares/auth')
require('../utils/validators.js')();

let refreshTokens = [];

const validateLogin = async (req, res) => {
    try {
        const { error } = validateUser(req.body);
        if (error) {
          logger.error(error);
          res.status(400).send({ status: 400, error});
          return;
        }

        const user = await User.findOne({email: req.body.email});
        logger.info(`POST /api/auth request has been accepted`);

        if (!user) return res.json({ status: 400, error: "Email not exists!", email: req.body.email });

        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) return res.json({ status: 400, error: "Invalid password!" });

        const accessToken = generateAccessToken({ _id: user._id });
        const refreshToken = jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
        refreshTokens.push(refreshToken);
        res.json({ status: 200, info: "user authenticated successfuly!", accessToken, refreshToken })
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
}

const refreshToken = (req, res) => {
    const { error } = validateToken(req.body);
    if (error) {
        logger.error(error);
        res.status(400).send({ status: 400, error});
        return;
    }
    const refreshToken = req.body.token;
    if (!refreshToken) return res.status(401).json({});
    if (!refreshTokens.includes(refreshToken)) return res.status(403).send("Invalid Refresh Token!");
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            logger.error(err);
            return res.status(403).send('Invalid Token!');
        }
        const accessToken = generateAccessToken({ _id: user._id });
        res.json({ accessToken });
    });
}

const deleteRefreshToken = (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.status(204).send("Logout Successfuly!");
}

module.exports = {
  validateLogin,
  refreshToken,
  deleteRefreshToken
}