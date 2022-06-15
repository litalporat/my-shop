const res = require("express/lib/response");
const Location = require("../models/Location");
const logger = require('../utils/logger');
const { ObjectId } = require("bson");

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
        await Location.create(req.body);
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
        logger.error(e);
        return res.status(400).json({ error: "invalid id!" });
    }
    try {
        let location = await Location.findOneAndRemove({ _id: req.params.id });
        if (!location)
            return res.status(400).json({ error: "location does not exists!" });
        return res.status(200).json({ info: "location deleted successfully!"});
    } catch (e) {
        logger.error(e);
        res.status(500).json({ message: "Server Error!" });
    }
};

const setLocationById = async (req, res) => {
    let _id = null;
    try {
        _id = ObjectId(req.params.id);
    } catch (e) {
        logger.error(e);
        return res.status(400).json({ error: "invalid id!" });
    }
    try {
        const { error } = validateLocation(req.body);
        if (error) {
            logger.error(error);
            res.status(400).send({ error });
            return;
        }
        let result = await Location.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (!result) return res.status(400).json({ error: "location does not exists!" });
        res.status(200).json({ info: "location updated successfuly!", product: req.body })
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