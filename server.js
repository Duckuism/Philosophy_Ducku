const express = require('express')
     ,http = require('http')
     ,path = require('path');

const bodyParser = require('body-parser')
     ,cookieParser = require('cookie-parser')
     ,static = require('serve-static')
     ,errorHandler = require('errorhandler');

const expressErrorHandler = require('express-error-handler');

const expressSession = require('express-session');

const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
	secret:'my key',
	resave:true,
	saveUninitialized:true
}));

const port = process.env.PORT || 5000;

const User = require('./models/user');
const Board = require('./models/board');

const router = require('./routes')(app, User, Board);

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
	console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost:27017/local');

const server = app.listen(port, () => console.log(`Listening on port ${port}`));