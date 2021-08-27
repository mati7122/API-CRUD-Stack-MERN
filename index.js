const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;

//DB en mongoDB Atlas
mongoose.connect(process.env.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server runing in port ${PORT}`)
        })
    })

