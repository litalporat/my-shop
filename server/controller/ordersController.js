const res = require("express/lib/response");
const Orders = require("../models/Orders");
const Product = require("../models/Product");
const logger = require('../utils/logger');
const { ObjectId } = require("bson");

require('../utils/validators.js')();

const getAllOrders = async (req, res) => {
    try {
        const orders = await Orders.find({});
        if (orders.length == 0) {
            res.status(400).send({ error: 'there are no orders to give!' });
            return;
        }
        res.status(200).json(orders);
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
};

const availableStock = (stock, results) => {
    for (let i = 0; i < results.length; i++) {
        // no stock in shop or stock in shop < order stock
        if (!results[i].stock[stock[i].size] || results[i].stock[stock[i].size] < stock[i].quantity)
            return false;
    }
    return true;
};

const addOrder = async (req, res) => {
    try {
        const { error } = validateOrder(req.body);
        if (error) {
            res.status(400).send({ error: error.details[0].message });
            return;
        }
        let stock = [];
        let promises = req.body.products.map((p) => {
            stock.push({ size: p.size, quantity: p.quantity });
            return Product.findById(p._id);
        });
        let results = await Promise.all(promises);
        if (availableStock(stock, results)) {
            await Orders.create(req.body);
            return res.status(200).json({ info: "order was added successfuly!" })
        }
        return res.status(400).json({ info: "invalid order, items not in stock!" })
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
}

const deleteOrderById = async (req, res) => {
    let _id = null;
    try {
        _id = ObjectId(req.params.id);
    } catch (e) {
        logger.error(e);
        return res.status(400).json({ error: "invalid id!" });
    }
    try {
        let order = await Orders.findOneAndRemove({ _id: req.params.id });
        if (!order)
            return res.status(400).json({ error: "order does not exists!" });
        return res.status(200).json({ info: "order deleted successfully!"});
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
};

const setOrderById = async (req, res) => {
    let _id = null;
    try {
        _id = ObjectId(req.params.id);
    } catch (e) {
        logger.error(e);
        return res.status(400).json({ error: "invalid id!" });
    }
    try {
        const { error } = validateOrder(req.body);
        if (error) {
            logger.error(error);
            res.status(400).send({ error });
            return;
        }
        let result = await Orders.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (!result) return res.status(400).json({ error: "order does not exists!" });
        res.status(200).json({ info: "order updated successfuly!", product: req.body })
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
}

module.exports = {
    getAllOrders,
    addOrder,
    deleteOrderById,
    setOrderById
}