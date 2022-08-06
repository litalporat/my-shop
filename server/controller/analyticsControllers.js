const res = require("express/lib/response");
const Categories = require("../models/Categories");
const Product = require("../models/Product");
const Orders = require("../models/Orders");
const logger = require('../utils/logger');


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

const getOrdersCountries = async (req, res) => {
    try {
        const orders = await Orders.aggregate([
            {
                $group: {
                    _id: '$country',
                    "count": {"$sum":1},
                    "profit": {"$sum": "$total"}
                }
            }
        ]);
        if (orders.length == 0) {
            res.status(400).send({ error: 'error, no orders!' });
            return;
        }
        let result = orders.map(item => (
            {
                "country": item["_id"],
                "amountSold": item["count"],
                "profit": item["profit"]
            }
        ));
        res.status(200).json(result);
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
}

module.exports = {
    getStock,
    getOrdersCountries
}