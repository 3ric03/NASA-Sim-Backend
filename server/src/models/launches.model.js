const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date('December 27, 2030'),
    target: "Kepler-442 b",
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
};

launches.set(launch.flightNumber, launch); //key and value

function getAllLaunches (){
    return Array.from(launches.values());
}

function existsLaunchId (launchId){
    return launches.has(launchId);
}
function addNewLaunch(launch) {
    latestFlightNumber++;

    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            upcoming: true, 
            success: true, 
            customers: ['Eric', 'NASA'],
            flightNumber: latestFlightNumber,
        
    }))
}

function abortLaunchById (launchId)
{
    const aborted = launches.get(launchId);
    console.log(aborted);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    addNewLaunch,
    getAllLaunches,
    existsLaunchId,
    abortLaunchById
}