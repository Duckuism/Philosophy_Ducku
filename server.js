const express = require('express')
     ,http = require('http')
     ,path = require('path')
     ,passport = require('passport');


const bodyParser = require('body-parser')
     ,cookieParser = require('cookie-parser')
     ,static = require('serve-static')
     ,errorHandler = require('errorhandler')
     ,morgan = require('morgan');

const expressErrorHandler = require('express-error-handler');

const expressSession = require('express-session');

const flash = require('connect-flash');

const mongoose = require('mongoose');

const app = express();

//http 설정
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
	secret:'my key',
	resave:true,
	saveUninitialized:true
}));

//view 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 5000;

const User = require('./database/user_schema');
const Board = require('./database/board_schema');

const router = require('./routes')(app, User, Board);
const config = require('./config');


const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
	console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost:27017/local');

console.log('config.server_port:%d', config.server_port);
const server = app.listen(port, () => console.log(`Listening on port ${port}`));


//passport 사용 설정
app.use(passport.initialize()); //패스포트 초기화 후 결과를 use() 메소드를 통해 파라미터로 전달
app.use(passport.session()); //로그인 세션 정보 유지. 메서드 호출 후 결과를 use() 메소드를 통해 파라미터로 전달
app.use(flash());



