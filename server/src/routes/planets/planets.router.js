const express = require('express')
const {httpGetAllPlanets} = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/', httpGetAllPlanets); //root route, /planets, as specified in app.js

module.exports = planetsRouter;