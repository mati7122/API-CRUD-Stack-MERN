const mongoose = require('mongoose');
const app = require('./app');

const PORT = 3200;

//DB en mongoDB Atlas
mongoose.connect('mongodb+srv://matiash:matiash@carsdb.290x4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server runing in port ${PORT}`)
        })
    })

//DB en local
// mongoose.connect('mongodb://localhost:27017/CRUD_database', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`Server runing in port ${PORT}`)
//         })
//     })