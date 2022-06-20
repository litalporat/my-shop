const res = require("express/lib/response");
const Currency = require("../models/Currency");
const logger = require('../utils/logger');

const getAllCurrencies = async (req, res) => {
    try {
        const result = await Currency.findOne({});
        res.status(200).json(result);
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
};

module.exports = {
    getAllCurrencies
}