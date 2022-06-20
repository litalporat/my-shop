const express = require("express");
const router = express.Router();
const { verifyToken } = require('../middlewares/auth');
const { getAllLocations, addLocation, deleteLocationById, setLocationById } = require("../controller/locationController");

//@desc get all locations from db
//@route GET /api/locations
//@access Public
router.get("/", getAllLocations);

//@desc get a location by id from db
//@route PATCH /api/locations/:id
//@access Public
router.patch("/:id", verifyToken, setLocationById);

//@desc add a location to the db
//@route POST /api/locations
//@access Public
router.post("/", verifyToken, addLocation);

// @desc delete a location from the db
// @route DELETE /api/locations/:id
// @access Public
router.delete("/:id", verifyToken, deleteLocationById);

module.exports = router;
