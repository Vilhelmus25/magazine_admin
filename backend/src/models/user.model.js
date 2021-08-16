const mongoose = require('mongoose');
const mongooseBcrypt = require('mongoose-bcrypt');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true
    },
    address: String,
    active: Boolean,
    role: {
        type: Number,
        default: 0,
    }
}, {
    timeStamps: true
});


UserSchema.plugin(mongooseBcrypt);

module.exports = mongoose.model('User', UserSchema);
