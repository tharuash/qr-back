const express = require('express');
const app = express();
const http = require('http').createServer(app)
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connceted to Mongoose'));

//Get logs 
app.use(morgan('dev'));

// parse data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

//app.use('/',routes)

/*app.use((req, res, next)=>{
    const error = new Error('Not fonud');
    error.status= 404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        errorCode : error.status,
        errorMessageg : error.message
    })
})*/

app.get('/', (req, res) => {
    res.json({test: true});
});

module.exports = http

