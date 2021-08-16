const mongoose = require('mongoose');

const ColleagueSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birth_date: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Colleague', ColleagueSchema);

