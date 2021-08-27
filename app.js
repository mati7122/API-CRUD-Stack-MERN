const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Middlewares
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'));
app.use('/api', routes);

module.exports = app;