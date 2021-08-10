const mongoose = require('mongoose');

const CertificateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    taxNumber: {
        type: String,
        required: true
    },
    headquarters: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    legalReference: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    subscriber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscriber',
        required: true
    },
}, {
    timeStamps: true
});

module.exports = mongoose.model('Certificate', CertificateSchema);


// _id: string = "";
// name: string = "";
// taxNumber: string = "";
// headquarters: string = "";
// date: string = "";
// legalReference: string = "";
// director: string = "";