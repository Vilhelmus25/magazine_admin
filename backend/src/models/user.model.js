const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true
    },
    address: String,
    active: Boolean,
}, {
    timeStamps: true
});

module.exports = mongoose.model('User', UserSchema);


// _id: string = "";
// firstname?: string = "";
// lastname?: string = "";
// email?: string = "";
// active?: boolean = true;
// password?: string = "";
// accessToken?: string = "";
// role?: string = "";