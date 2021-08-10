const mongoose = require('mongoose');

const connectDB = mongoose.connect('mongodb+srv://matiash:matiash@carsdb.290x4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
module.exports = connectDB;