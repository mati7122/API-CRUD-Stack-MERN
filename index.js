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

// mongoose.connect('mongodb+srv://matiash:matiash@carsdb.290x4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`Server runing in port ${PORT}`)
//         })
//     })

