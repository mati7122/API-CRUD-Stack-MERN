const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//mongo connect
// const connectDB = require('./mongoConnect');
// connectDB;

//middlewares
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes);

module.exports = app;