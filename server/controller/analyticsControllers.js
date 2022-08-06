const res = require("express/lib/response");
const Categories = require("../models/Categories");
const Product = require("../models/Product");
const logger = require('../utils/logger');
const { ObjectId } = require("bson");
const getStock = async (req, res) => {
    try {
        let cats = await Categories.find({});
        cats = cats.map(obj => obj.name);
        let map = {};
        cats.forEach(item => map[item] = 0);
        const products = await Product.find({});
        products.forEach(p => {
            Object.keys(p["stock"]).forEach(size => {
                map[p["type"]] += p["stock"][size]
            })
        })
        res.status(200).json(map);
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
};

module.exports = {
    getStock
}