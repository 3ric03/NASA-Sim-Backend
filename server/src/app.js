const express = require('express');
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')
const app = express();
const path = require('path')
const cors = require('cors');
const morgan = require('morgan');

const bodyParser = require('body-parser');

//app.use(express.bodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'))

//middle ware
app.use(express.json()); //check if input is json
app.use(express.static(path.join(__dirname, '..', 'public'))) //serving the front end to the user

app.use('/launches', launchesRouter);//match /launches
app.use('/planets', planetsRouter); //go to the planets route
app.get('/*', (req, res) => {//if no backend routes found, routing is past to the frontend 
    res.send(path.join(__dirname, '..', 'public', 'index.html'));
})
module.exports = app;