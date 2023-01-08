const express = require('express');

const {httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.delete('/:id', httpAbortLaunch);
launchesRouter.get('/', httpGetAllLaunches);//matches root route, which is /launches 
launchesRouter.post('/', httpAddNewLaunch);


module.exports = launchesRouter;