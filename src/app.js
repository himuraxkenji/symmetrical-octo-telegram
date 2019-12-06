const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongo = require('mongoose');

const app = express();
const userRoutes = require('./routes/users');

// Connection to Mongodb
const url = 'mongodb://admin:Ad46b36ff@localhost:27017/rest-api-example?authSource=admin';
mongo.Promise = global.Promise;
mongo.connect(url, {useNewUrlParser: true})
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/users',userRoutes);


// Static files

// Errors Handlers

// Start the server
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});


