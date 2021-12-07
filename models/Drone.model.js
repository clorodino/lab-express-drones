// Iteration #1

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
    name: {type: String},
    propellers: {type: Number},
    maxSpeed: {type: Number}
});

const Drone = mongoose.model("Drone", droneSchema); // collection : "students"

module.exports = Drone;