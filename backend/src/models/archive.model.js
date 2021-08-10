const mongoose = require('mongoose');

const ArchiveSchema = mongoose.Schema({
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
        type: Number,
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


// _id: string = "";
//     name: string = "";
//     postalCode: number = 0;
//     city: string = "";
//     address: string = "";
//     licence_id: number = 0;
//     licenced_seasons: number = 0;
//     amount: number = 0;
//     colleague: string = ""