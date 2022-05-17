const res = require("express/lib/response");
const User = require("../models/User");
const logger = require('../logger');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('../validators.js')();

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

        const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
        res.header('auth-token', token);
        res.json({ status: 200, info: "user authenticated successfuly!" })
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
}

module.exports = {
  validateLogin
}