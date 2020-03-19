require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const moment = require('moment');
const bcrypt = require("bcrypt");
const  jwt =require('jsonwebtoken');
//require chalk module to give colors to console text


mongoose.connect(  "mongodb://127.0.0.1/newagebot",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(() => {
    console.log("Connected to Mongo Database Successfully");
}).catch((err) => {
    console.log("Failed to Connect to MongoDb ", err);
});



//routes
const mailer = require('./api/service/mailer');
const traders = require('./api/routes/trader');
const guests = require('./api/routes/guest');
const comments = require('./api/routes/comment');
const replys = require('./api/routes/reply');
const user = require('./api/routes/user');
const upload = require('./api/routes/upload');
// const session = require('express-session');


//middleware
app.use(logger('dev'));
app.use('/uploads', express.static('uploads'));
//to parsee the body of incoming request (body-parser)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());




// routes
app.use('/api/user', user);
app.use('/api/traders', traders);
app.use('/api/guests', guests);
app.use('/api/comments', comments);
app.use('/api/replys', replys);
app.use('/api/upload', upload);
app.use('/api/mailer', mailer);



//catch 404 errors and forward them to error handles
/*app.use((req, res, next) => {
    const err = new Error('Not found ');
    err.status = 404;
    next(err)
});*/


//error handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err :{};
    const status = err.status || 500;


//respond to client
    res.status(status).json({
        error:{
            message:error.message
        }
    });

//respond to ourselves
    console.error(err);

});

    app.use(express.static(__dirname + '/dist/'));
    //handle SPA
    app.get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));



module.exports = app;


console.log(__dirname);
