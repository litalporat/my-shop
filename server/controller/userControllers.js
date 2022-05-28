const { ObjectId } = require("bson");
const res = require("express/lib/response");
const User = require("../models/User");
const logger = require('../utils/logger');
require('../utils/validators.js')();

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Server Error!" });
  }
};

const getUserById = async (req, res) => {
  let _id = null;
  try {
    _id = ObjectId(req.params.id);
  } catch (e) {
    return res.status(400).json({ error: "invalid id!" });
  }
  try {
    const user = await User.findById(_id);
    if (!user) return res.status(400).json({ error: "user does not exists!" });
    res.status(200).json({ info: "user found!", data: user });
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Server Error!" });
  }
};

const deleteUserById = async (req, res) => {
  let _id = null;
  try {
    _id = ObjectId(req.params.id);
  } catch (e) {
    return res.status(400).json({ error: "invalid id!" });
  }
  try {
    const emailExist = await User.findById(_id);
    if (!emailExist) return res.status(400).json({ error: "user does not exists!" });
    await User.findOneAndRemove(req.params.id);
    res.status(200).json({ info: "user deleted successfully!"});
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Server Error!" });
  }
};

const addUser = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      res.status(400).send({ error: error.details[0].message });
      return;
    }
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).json({ error: "Email already exists!", email: req.body.email });
    await User.create(req.body);
    res.json({ info: "user was added successfuly!" })
  } catch (e) {
    logger.error(e);
    res.status(500).json({ message: "Server Error!" });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUserById
}