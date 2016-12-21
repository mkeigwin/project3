
const fetch = require('node-fetch');

function getRoverImages(req, res, next) {

 const ROVER_KEY = process.env.ROVER_KEY;
 const month = Math.floor(Math.random() * 12) + 1;
 const day = Math.floor(Math.random() * 28) + 1;

 fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-${month}-${day}&api_key=${ROVER_KEY}`)
 .then(r => r.json())
 .then((result) => {
   res.rover = result;
   next();
 })
 .catch((err) => {
   res.err = err;
   next();
 });
}


module.exports = { getRoverImages };
