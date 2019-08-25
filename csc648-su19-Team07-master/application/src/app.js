/**
 * The main configuration file for the entire Node application
 * All routes and dependencies are imported here, and the application
 * launches from this file.
 * 
 * Any configuration to the application should be made here
 * 
 * Author: Erick Velez
 */

const express = require('express');
const app = express();
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = 3000;

/** Use body parser before importing routes */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
//session middleware for user login
app.use(session({
    key: 'sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('sid');        
    }
    next();
});

/** begin importing all routes */
const indexRouter = require('./routes/index'),
    aboutRouter = require('./routes/about'),
    resultsRouter = require('./routes/results'),
    loginRouter = require('./routes/login'),
    signUpRouter = require('./routes/signup'),
    postRouter = require('./routes/post'),
    contactRouter = require('./routes/contact'),
    signoutRouter = require('./routes/signout');

/** begin middleware use for routes */
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/results', resultsRouter);
app.use('/login', loginRouter);
app.use('/signUp', signUpRouter);
app.use('/post', postRouter);
app.use('/contact', contactRouter);
app.use('/signout', signoutRouter);
app.use(morgan('dev'));

/** static directories config */
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/uploads', express.static(__dirname + '/uploads'));

/** template engine config */
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.listen(port, function () {
    console.log("Listening on port 3000");
});