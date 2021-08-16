const mongoose = require('mongoose');

const ArchiveSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    name: {
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
    licence_id: {
        type: String,
        required: true
    },
    licenced_seasons: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    colleague: {
        type: String,
        required: true
    },

}, {
    timeStamps: true
});

module.exports = mongoose.model('Archive', ArchiveSchema);
