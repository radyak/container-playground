var mongoose = require('mongoose');

var flightSchema = mongoose.Schema({
    id: String,
    departure: {
        city: String,
        datetime: String
    },
    arrival: {
        city: String,
        datetime: String
    },
    price: Number,
    seats: Number
});
var Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;