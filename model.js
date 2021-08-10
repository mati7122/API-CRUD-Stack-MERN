const mongoose = require('mongoose');

const Model = mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    location: String
})

module.exports = mongoose.model('UserModel', Model);