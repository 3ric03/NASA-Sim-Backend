const PORT = process.env.PORT || 8000; // if process.env.PORT (specified in package.json) undefined, use 8k 
//different port from front-end

const app = require("./app");

const {loadPlanetsData} = require('./models/planets.model')
const http = require ('http');
const server = http.createServer(app);

async function startServer(){ //need an async function to use await
    await loadPlanetsData(); //blocks the code until the function (loading the planets) is complete

    server.listen(PORT, () => { //then start listening to front end requests
    console.log(`Listening on port ${PORT}`);
});
}

startServer();//start

