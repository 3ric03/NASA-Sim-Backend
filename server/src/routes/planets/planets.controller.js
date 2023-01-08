 const {getAllPlanets}= require('../../models/planets.model')

function httpGetAllPlanets (req, res) {
    return res.status(200).json(getAllPlanets());  //ends process here, to avoid multiple responses

}

module.exports = {
    httpGetAllPlanets,
}