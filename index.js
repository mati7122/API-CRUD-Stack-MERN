const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;

//DB en mongoDB Atlas
mongoose.connect('mongodb+srv://matiash:matiash@carsdb.290x4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server runing in port ${PORT}`)
        })
    })
// app
//     .get('/', (req, res) => )

