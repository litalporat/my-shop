const res = require("express/lib/response");
const User = require("../models/User");
const logger = require('../utils/logger');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../middlewares/auth');
require('../utils/validators.js')();

let refreshTokens = [];

const validateLogin = async (req, res) => {
    try {
        const { error } = validateUser(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        const user = await User.findOne({ email: req.body.email });

        if (!user) return res.status(400).json({ error: "email not exists!", email: req.body.email });

        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) return res.status(400).json({ error: "invalid password!" });

        const accessToken = generateAccessToken({ _id: user._id });
        const refreshToken = jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
        refreshTokens.push(refreshToken);
        res.status(200).json({ info: "user authenticated successfuly!", accessToken, refreshToken });
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
}

const refreshToken = (req, res) => {
    const { error } = validateToken(req.body);
    if (error) {
        res.status(400).json({error: error.details[0].message});
        return;
    }
    const refreshToken = req.body.token;
    if (!refreshTokens.includes(refreshToken)) return res.status(403).json({ error: "invalid refresh token!" });
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({error:'invalid Token!'});
        }
        const accessToken = generateAccessToken({ _id: user._id });
        res.json({ accessToken });
    });
}

const deleteRefreshToken = (req, res) => {
    const { error } = validateToken(req.body);
    if (error) {
        res.status(400).json({error: error.details[0].message});
        return;
    }
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.status(200).json({info: "logout successfuly!"});
}

module.exports = {
    validateLogin,
    refreshToken,
    deleteRefreshToken
}