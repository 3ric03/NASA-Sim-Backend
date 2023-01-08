const {getAllLaunches, 
addNewLaunch, existsLaunchId, abortLaunchById} = require ('../../models/launches.model')

function httpGetAllLaunches (req, res) {
    return res.status(200).json(getAllLaunches());
}
const express = require('express');
const app = express();

app.use(express.json());

function httpAddNewLaunch (req, res) {
    const launch = req.body;
    launch.launchDate = new Date (launch.launchDate);//converting date string to date object
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({
            error: "Missing Launch Properties"
        });
    }
    
    
    if (isNaN(launch.launchDate)){
        return res.status(400).json({
            error: "Missing Launch Properties"
        });
    }
    addNewLaunch(launch);
    return res.status(201).json(launch);
}
 function httpAbortLaunch (req, res) {
    const launchId = +req.params.id;//convert to number
    console.log("break", req.params);
    if (!existsLaunchId(launchId))
    {
         //if launch doesnt exist return 404
        return res.status(404).json({
            error: "Launch not found"
    })
    }
   const aborted = abortLaunchById(launchId);
   return res.status(200).json(aborted)
    
 }
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}

