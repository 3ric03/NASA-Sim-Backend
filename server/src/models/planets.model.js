
const path = require('path');
//parse() returns an event emitter
const fs = require('fs');
const {parse} = require('csv-parse');
const { dirname } = require('path');
const habitablePlanets = [];

function isHabitable (planet)//check if habitable
{
    return planet['koi_disposition'] === 'CONFIRMED'
     && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
     && planet['koi_prad'] < 1.6;
}
function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
        .pipe(parse({
            comment: "#", //treat line starting with # as comments
            columns: true, //return each row in csv as JS object
        }))   //stream is source (readable stream), parser() is desination (writable stream), and they are conncted by pipe()
        .on('data', (data) => { //read file as a stream (bits)
            if (isHabitable(data))
            habitablePlanets.push(data);
        })
        .on('error', (err)=> {
            console.log(err);
            reject(err);
        } )
        .on('end', () => {
            console.log(`${habitablePlanets.length} habitable planets found!`);
            resolve();
        });
    })
   

}
function getAllPlanets() {
    return habitablePlanets;
}
module.exports = {
    loadPlanetsData, 
    getAllPlanets,
};