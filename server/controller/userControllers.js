const res = require("express/lib/response");
const User = require("../models/User");
const logger = require('../utils/logger');
require('../utils/validators.js')();

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    logger.info("GET /api/users request has been accepted");
    res.json(users);
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Server Error!" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    logger.info(`GET /api/users/${req.params.id} request has been accepted`);
    res.json(user);
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Server Error!" });
  }
};

const addUser = async (req, res) => {
  try {
    console.log(req.body)
    const { error } = validateUser(req.body);
    if (error) {
      logger.error(error);
      res.status(400).send({ status: 400, error});
      return;
    }
    const emailExist = await User.findOne({email: req.body.email});
    logger.info(`POST /api/users request has been accepted`);
    if (emailExist) return res.json({ status: 400, error: "Email already exists!", email: req.body.email });
    await User.create(req.body);
    res.json({ status: 200, info: "product added successfuly!" })
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Server Error!" });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser
}