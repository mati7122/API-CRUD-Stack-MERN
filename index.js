const mongoose = require('mongoose');
const app = require('./app');

const PORT = 3200;

mongoose.connect('mongodb://localhost:27017/CRUD_database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server runing in port ${PORT}`)
        })
    })