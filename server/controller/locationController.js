const res = require("express/lib/response");
const Location = require("../models/Location");
const logger = require('../utils/logger');
require('../utils/validators.js')();

const getAllLocations = async (req, res) => {
    try {
        const location = await Location.find({});
        if (location.length == 0) {
            res.status(400).send({ error: 'there are no locations to give!' });
            return;
        }
        res.status(200).json(location);
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
};

const addLocation = async (req, res) => {
    try {
        const { error } = validateLocation(req.body);
        if (error) {
            res.status(400).send({ error: error.details[0].message });
            return;
        }
        await User.create(req.body);
        res.json({ info: "location was added successfuly!" })
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
}

const deleteLocationById = async (req, res) => {
    let _id = null;
    try {
        _id = ObjectId(req.params.id);
    } catch (e) {
        return res.status(400).json({ error: "invalid id!" });
    }
    try {
        const exitingLocation = await Location.findById(_id);
        if (!exitingLocation) return res.status(400).json({ error: "location does not exists!" });
        await Location.findOneAndRemove(req.params.id);
        res.status(200).json({ info: "location deleted successfully!"});
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
};

const setLocationById = async (req, res) => {
    try {
        const _id = req.params.id;
        const { error } = validateLocation(req.body);
        if (error) {
            logger.error(error);
            res.status(400).send({ error });
            return;
        }
        await Product.findByIdAndUpdate({_id}, req.body);
        res.json({ status: 200, info: "location updated successfuly!", product: req.body })
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
}

module.exports = {
    getAllLocations,
    addLocation,
    deleteLocationById,
    setLocationById
}