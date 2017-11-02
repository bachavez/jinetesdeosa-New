const express = require('express');
const bodyParser = require('body-parser');

//const db = require('./models');

const app = express();

//app.use(express.static(`${__dirname}/..dist`));
app.use(express.static('public'));
app.use(bodyParser.json());
//app.use('/api', require('./api'));

module.exports = app;