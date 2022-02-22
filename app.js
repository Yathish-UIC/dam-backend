const connection = require('./model');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/users');

app.use(bodyParser.urlencoded({
    extended: true
}));
var jsonParser = bodyParser.json();

app.use('/users',jsonParser,userController);
//Route



app.listen(5000);