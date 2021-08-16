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
    // time: {
    //     type: Date,
    //     default: new Date(),
    // }
}, {
    timeStamps: true
});

module.exports = mongoose.model('Colleague', ColleagueSchema);


// _id: string = "";
//     name: string = "";
//     postalCode: number = 0;
//     city: string = "";
//     address: string = "";
//     licence_id: number = 0;
//     licenced_seasons: number = 0;
//     seasons_left: number = 0;
//     amount: number = 0;
//     colleague: string = "";