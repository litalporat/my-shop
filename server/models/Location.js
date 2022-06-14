const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        require: true,
    },
    lng: {
        type: Number,
        require: true,
    },
});

const Location = mongoose.model("location", locationSchema);

module.exports = Location;